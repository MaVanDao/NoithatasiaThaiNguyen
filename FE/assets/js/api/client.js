/* ============================================================
   CLIENT — Nơi DUY NHẤT gọi sang Backend trong toàn bộ Frontend.
   Mọi file trong api/*.js đều gọi qua đây, KHÔNG dùng fetch() trực
   tiếp ở nơi khác — để chỗ nào cũng tự động được gắn token đăng
   nhập, tự động hiện lỗi giống nhau.
   ============================================================ */
window.Asia = window.Asia || {};

Asia.apiClient = {

  async request(method, path, body) {
    const token = Asia.Storage.get("access_token");
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = "Bearer " + token;

    let response;
    try {
      response = await fetch(path, {
        method: method,
        headers: headers,
        body: body ? JSON.stringify(body) : null,
        credentials: "include" // để gửi kèm cookie refresh-token
      });
    } catch (networkError) {
      // Không kết nối được server (mất mạng, server sập...)
      throw { code: "NETWORK_ERROR", detail: "Không kết nối được tới máy chủ" };
    }

    // Token hết hạn → thử làm mới rồi gọi lại 1 lần
    if (response.status === 401 && token && !path.includes("/auth/refresh")) {
      const refreshed = await Asia.apiClient._tryRefreshToken();
      if (refreshed) {
        return Asia.apiClient.request(method, path, body);
      }
    }

    let data = null;
    try { data = await response.json(); } catch (e) { /* không có nội dung trả về */ }

    if (!response.ok) {
      throw data || { code: "UNKNOWN_ERROR", detail: "Có lỗi xảy ra, vui lòng thử lại" };
    }
    return data;
  },

  async _tryRefreshToken() {
    try {
      const res = await fetch(Asia.Api.AUTH.REFRESH, { method: "POST", credentials: "include" });
      if (!res.ok) return false;
      const data = await res.json();
      if (data && data.access_token) {
        Asia.Storage.set("access_token", data.access_token);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  },

  get(path)        { return Asia.apiClient.request("GET", path); },
  post(path, body) { return Asia.apiClient.request("POST", path, body); },
  put(path, body)  { return Asia.apiClient.request("PUT", path, body); },
  del(path)        { return Asia.apiClient.request("DELETE", path); }
};