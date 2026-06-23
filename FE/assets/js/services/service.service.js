/* ============================================================
   SERVICE.SERVICE — Nơi DUY NHẤT chứa dữ liệu dự án Thiết Kế &
   Thi Công. Cùng nguyên tắc như product.service.js.

   ⚠️ ĐANG DÙNG DỮ LIỆU MẪU. Khi Backend xong, sửa getByCategory()
   để gọi: Asia.apiClient.get(Asia.Api.SERVICES + "?category=" + slug)
   ============================================================ */
window.Asia = window.Asia || {};

Asia.ServiceService = {

  _mockData: {
    "phong-ngu": [
      {
        id: 601,
        slug: "phong-ngu-toi-gian-tong-tram",
        name: "Phòng Ngủ Tối Giản Tông Trầm",
        category: "phong-ngu",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        ],
        area: "18m²",
        style: "Tối giản",
        description: "Thiết kế phòng ngủ mềm mại, tối giản và tối ưu lưu trữ với tông màu trầm giúp không gian thư giãn hơn.",
        details: "Sử dụng nội thất gỗ óc chó, đèn led âm trần và tủ áo âm tường để tăng cảm giác rộng rãi.",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        id: 602,
        slug: "phong-ngu-master-hien-dai",
        name: "Phòng Ngủ Master Hiện Đại",
        category: "phong-ngu",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        ],
        area: "22m²",
        style: "Hiện đại",
        description: "Phòng ngủ master với giường ngủ nổi bật, hệ tủ âm tường và ánh sáng ấm giúp ngủ sâu và thư giãn.",
        details: "Tông màu nâu be kết hợp ánh sáng vàng tạo cảm giác sang trọng nhưng vẫn ấm cúng.",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        id: 603,
        slug: "phong-ngu-tre-em-sang-tao",
        name: "Phòng Ngủ Trẻ Em Sáng Tạo",
        category: "phong-ngu",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        ],
        area: "15m²",
        style: "Sáng tạo",
        description: "Không gian thiết kế phù hợp trẻ em, kết hợp màu sắc vui tươi và đồ dùng tiện ích cho việc học và vui chơi.",
        details: "Tủ sách, bàn học, và đèn bàn được bố trí hợp lý để tạo sự gọn gàng và gần gũi."
      }
    ],
    "phong-khach": [
      {
        id: 611,
        slug: "phong-khach-mo-lien-thong-bep",
        name: "Phòng Khách Mở Liên Thông Bếp",
        category: "phong-khach",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
        ],
        area: "30m²",
        style: "Mở",
        description: "Thiết kế phòng khách kết nối bếp và khu sinh hoạt, mang lại cảm giác rộng rãi, thoáng đãng và tiện nghi.",
        details: "Tông màu trung tính, bàn trà dài, kệ tivi âm tường kết hợp ánh sáng tự nhiên.",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        id: 612,
        slug: "phong-khach-phong-cach-bac-au",
        name: "Phòng Khách Phong Cách Bắc Âu",
        category: "phong-khach",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
        ],
        area: "26m²",
        style: "Bắc Âu",
        description: "Sự kết hợp giữa gỗ nhẹ, vải tự nhiên và ánh sáng trắng mang đến vẻ đẹp thanh lịch và ấm áp.",
        details: "Bố cục đối xứng, sofa chữ L, bàn trà gỗ và đèn dây tạo cảm giác cân đối."
      },
      {
        id: 613,
        slug: "phong-khach-sang-trong-toi-mau",
        name: "Phòng Khách Sang Trọng Tối Màu",
        category: "phong-khach",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        ],
        area: "28m²",
        style: "Sang trọng",
        description: "Không gian phòng khách đậm chất sang trọng với đường nét tinh tế, tông màu tối và ánh sáng điểm nhấn.",
        details: "Sofa da cao cấp, kệ trưng bày, và bàn nước được phối màu tối để tăng vẻ đẳng cấp."
      }
    ],
    "phong-bep": [
      {
        id: 621,
        slug: "bep-chu-l-toi-uu-dien-tich",
        name: "Bếp Chữ L Tối Ưu Diện Tích",
        category: "phong-bep",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
        ],
        area: "12m²",
        style: "Tiện nghi",
        description: "Bố trí bếp chữ L tối ưu diện tích, giúp thao tác nấu ăn thuận tiện và lưu trữ hiệu quả.",
        details: "Tủ dưới bếp âm tường, đảo bếp nhỏ và hệ thống đèn công nghiệp phù hợp gia đình trẻ.",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        id: 622,
        slug: "bep-dao-hien-dai",
        name: "Bếp Đảo Hiện Đại",
        category: "phong-bep",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
        ],
        area: "16m²",
        style: "Hiện đại",
        description: "Bếp đảo không chỉ đẹp mà còn tạo thêm mặt làm việc, phục vụ nhu cầu nấu ăn và tiếp khách.",
        details: "Mặt đá granite, tủ âm tường và hệ thống hút mùi hiện đại giúp bếp luôn gọn và thơm tho."
      },
      {
        id: 623,
        slug: "bep-gia-dinh-am-cung",
        name: "Bếp Gia Đình Ấm Cúng",
        category: "phong-bep",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
        ],
        area: "14m²",
        style: "Ấm cúng",
        description: "Bếp thiết kế vừa thân thiện vừa tiện ích, phù hợp gia đình có trẻ nhỏ hoặc thường xuyên sum họp.",
        details: "Màu sắc ấm, góc ăn nhỏ và kệ mở tiện lợi giúp không gian gọn mà vẫn đầy cảm xúc."
      }
    ],
    "phong-tho": [
      {
        id: 631,
        slug: "phong-tho-gia-tien-truyen-thong",
        name: "Phòng Thờ Gia Tiên Truyền Thống",
        category: "phong-tho",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
        ],
        area: "8m²",
        style: "Truyền thống",
        description: "Phòng thờ được thiết kế theo phong cách truyền thống, mang đậm dấu ấn gia đình và sự trang nghiêm.",
        details: "Tủ thờ gỗ tự nhiên, ánh sáng dịu và bố cục cân đối để giữ nét tôn nghiêm.",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        id: 632,
        slug: "phong-tho-hien-dai-toi-gian",
        name: "Phòng Thờ Hiện Đại Tối Giản",
        category: "phong-tho",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
        ],
        area: "7m²",
        style: "Tối giản",
        description: "Phong cách tối giản giúp phòng thờ trở nên thanh sạch, nhẹ nhàng và dễ duy trì lâu dài.",
        details: "Sử dụng vật liệu đơn sắc, đường nét sạch và đèn chiếu điểm tạo cảm giác yên bình."
      },
      {
        id: 633,
        slug: "phong-tho-ap-mai",
        name: "Phòng Thờ Áp Mái",
        category: "phong-tho",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        ],
        area: "9m²",
        style: "Cổ điển",
        description: "Thiết kế áp mái mang đến sự sang trọng, kết hợp nét cổ điển và tự nhiên cho không gian thờ cúng.",
        details: "Màu nâu gỗ, hoa văn tinh xảo và ánh sáng vàng tạo cảm giác trang nghiêm."
      }
    ],
    "phong-lam-viec": [
      {
        id: 641,
        slug: "phong-lam-viec-tai-nha-gon-gang",
        name: "Phòng Làm Việc Tại Nhà Gọn Gàng",
        category: "phong-lam-viec",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        ],
        area: "11m²",
        style: "Gọn gàng",
        description: "Phòng làm việc tại nhà được thiết kế tối ưu công năng, giữ không gian luôn ngăn nắp và dễ tập trung.",
        details: "Bàn làm việc đa năng, kệ âm tường và đèn bàn giúp tối ưu hiệu quả làm việc."
      },
      {
        id: 642,
        slug: "phong-lam-viec-sang-tao",
        name: "Phòng Làm Việc Sáng Tạo",
        category: "phong-lam-viec",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
        ],
        area: "13m²",
        style: "Sáng tạo",
        description: "Không gian làm việc linh hoạt, phù hợp với người yêu thích sự sáng tạo và làm việc nhiều giờ cùng máy tính.",
        details: "Tủ lưu trữ mở, bảng ghi chú và màu sắc nổi bật giúp tăng cảm hứng."
      },
      {
        id: 643,
        slug: "phong-lam-viec-giam-doc",
        name: "Phòng Làm Việc Giám Đốc",
        category: "phong-lam-viec",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
        ],
        area: "18m²",
        style: "Cao cấp",
        description: "Không gian làm việc cao cấp dành cho người quản lý, với bố cục rõ ràng và vật liệu sang trọng.",
        details: "Bàn làm việc lớn, ghế công thái học và kệ hồ sơ âm tường giúp tăng sự chuyên nghiệp."
      }
    ]
  },

  getAll() {
    return Object.keys(Asia.ServiceService._mockData).flatMap((key) => Asia.ServiceService._mockData[key]);
  },

  getByCategory(slug) {
    return Asia.ServiceService._mockData[slug] || [];
  },

  getBySlug(slug) {
    return Asia.ServiceService.getAll().find((item) => item.slug === slug) || null;
  },

  getRelated(item, count = 3) {
    const sameCategory = Asia.ServiceService.getByCategory(item.category).filter((x) => x.id !== item.id);
    return sameCategory.slice(0, count);
  }
};