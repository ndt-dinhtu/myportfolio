import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Building digital experiences with",
      intro_short: "Hi, I'm Tu. A developer",
      intro_desc:
        "I focus on performance, minimalist interfaces, and clean code. You have ideas, I have solutions.",
      view_project: "View Projects",
      projects_done: "Projects Done",
      years_exp: "Years Experience",
      happy_clients: "Happy Clients",
      tech_stack: "Technologies used",
      title_main: "Get in",
      title_accent: "Touch",
      subtitle: "Ready for breakthrough ideas",

      nav: {
        home: "Home",
        project: "Projects",
        about: "About",
        contact: "Contact",
      },
      about: {
        hero_title: "Building solutions from the soul of a developer.",
        name_label: "Full Name",
        dob_label: "Date of Birth",
        email_label: "Email",
        phone_label: "Phone",
        location_label: "Location",
        exp_label: "Experience",
        bio_1:
          "My journey began with a curiosity about how the web works. Over time, that curiosity evolved into a deep passion for the JavaScript ecosystem, specifically the MERN Stack. I don't just write code; I build seamless and efficient digital experiences.",
        bio_2:
          "With hands-on experience through various personal and collaborative projects, I prioritize system performance and scalability. I believe a great developer isn't just someone who codes fast, but someone who listens and transforms real-world problems into clean, maintainable code.",
        journey: "My Journey",
        stats: {
          projects: "Projects Completed",
          clients: "International Clients",
          support: "Dedicated Support",
        },
        work: " Available for Work",
        fulltime: "Freelance / Full-time",
        mastering: "Mastering the ",
        digital: "Digital Realm",
      },
      skills: {
        title: "Soft Skills",
        time_mgmt: "Time Management",
        time_mgmt_desc: "Optimizing workflow for maximum productivity.",
        hard_working: "Diligence & Responsibility",
        hard_working_desc: "Always dedicated and meeting all deadlines.",
        eager_learn: "Eager to Learn",
        eager_learn_desc:
          "Constantly updating new technologies and coding mindset.",
        teamwork: "Teamwork",
        teamwork_desc:
          "Communicating effectively and supporting teammates in every project.",
        problem_solving: "Problem Solving",
        problem_solving_desc:
          "Analyzing and finding optimal solutions for difficult problems.",
        reliability: "Reliability",
        reliability_desc:
          "Always maintaining commitments to quality and product security.",
      },
      contact: {
        title: "Contact Me",
        subtitle: "Have a Project in Mind?",
        desc: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
        phone: "Phone",
        address: "Address",
        form_name: "Full Name",
        form_msg: "Message",
        send: "Send Message",
      },
      footer: {
        description: " Built with ❤️ and MERN Stack.",
        back: " Back to top",
      },
      cv: {
        title: "Want to know more about me?",
        desc: "Download my full CV to see detailed work history, projects, and professional skills.",
        button: "Download CV Now",
        format: "PDF Format",
        updated: "Updated 2026",
      },
    },
  },
  vi: {
    translation: {
      welcome: "Xây dựng trải nghiệm số với",
      intro_short: "Chào, tôi là Tú. Một lập trình viên",
      intro_desc:
        "Tôi tập trung vào hiệu năng, giao diện tối giản và code sạch. Bạn có ý tưởng, tôi có giải pháp.",
      view_project: "Xem dự án",
      projects_done: "Dự án hoàn thành",
      years_exp: "Năm kinh nghiệm",
      happy_clients: "Khách hàng hài lòng",
      tech_stack: "Công nghệ sử dụng",
      title_main: "Liên Hệ",
      title_accent: "Với Tôi",
      subtitle: "Sẵn sàng cho những ý tưởng đột phá",
      nav: {
        home: "Trang chủ",
        project: "Dự án",
        about: "Giới thiệu",
        contact: "Liên hệ",
      },
      about: {
        hero_title: "Xây dựng giải pháp từ tâm hồn của một lập trình viên.",
        name_label: "Họ tên",
        dob_label: "Ngày sinh",
        email_label: "Email",
        phone_label: "Điện thoại",
        location_label: "Địa chỉ",
        exp_label: "Kinh nghiệm",
        bio_1:
          "Hành trình của tôi bắt đầu từ sự tò mò với cách các trang web vận hành. Qua thời gian, sự tò mò đó đã trở thành niềm đam mê mãnh liệt với hệ sinh thái JavaScript, đặc biệt là MERN Stack. Tôi không chỉ viết code, tôi xây dựng những trải nghiệm mượt mà và hiệu quả cho người dùng.",
        bio_2:
          "Với kinh nghiệm thực chiến qua nhiều dự án cá nhân và làm việc nhóm, tôi luôn đặt hiệu năng và khả năng mở rộng của hệ thống lên hàng đầu. Tôi tin rằng một lập trình viên giỏi không chỉ là người gõ code nhanh, mà là người biết lắng nghe và chuyển hóa bài toán thực tế thành những dòng code tinh gọn, dễ bảo trì.",
        journey: "Hành trình của tôi",
        stats: {
          projects: "Dự án hoàn thành",
          clients: "Khách hàng quốc tế",
          support: "Hỗ trợ tận tâm",
        },
        work: "Sẵn sàng làm việc",
        fulltime: "Làm việc tự do / toàn thời gian",
        mastering: "Làm chủ ",
        digital: "Thế giới kĩ thuật số",
      },
      skills: {
        title: "Kĩ Năng Mềm",
        time_mgmt: "Quản lý thời gian",
        time_mgmt_desc:
          "Tối ưu hóa quy trình làm việc để đạt hiệu suất cao nhất.",
        hard_working: "Cần cù & Trách nhiệm",
        hard_working_desc:
          "Luôn tận tâm và hoàn thành công việc đúng thời hạn đề ra.",
        eager_learn: "Ham học hỏi",
        eager_learn_desc:
          "Liên tục cập nhật các công nghệ mới và cải thiện tư duy lập trình.",
        teamwork: "Làm việc nhóm",
        teamwork_desc: "Giao tiếp hiệu quả và hỗ trợ đồng đội trong mọi dự án.",
        problem_solving: "Giải quyết vấn đề",
        problem_solving_desc:
          "Phân tích và tìm ra giải pháp tối ưu cho các bài toán khó.",
        reliability: "Sự tin cậy",
        reliability_desc:
          "Luôn giữ vững cam kết về chất lượng và bảo mật sản phẩm.",
      },
      contact: {
        title: "Liên Hệ Với Tôi",
        subtitle: "Bạn có dự án trong đầu?",
        desc: "Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc các cơ hội hợp tác.",
        phone: "Điện thoại",
        address: "Địa chỉ",
        form_name: "Họ tên",
        form_msg: "Lời nhắn",
        send: "Gửi tin nhắn",
      },
      footer: {
        description: " Xây dựng bằng ❤️ và MERN Stack.",
        back: " Cuộn lên trên",
      },
      cv: {
        title: "Bạn muốn tìm hiểu kỹ hơn về tôi?",
        desc: "Tải xuống bản CV đầy đủ để xem chi tiết về quá trình làm việc, các dự án và kỹ năng chuyên môn của tôi.",
        button: "Tải CV Ngay",
        format: "Định dạng PDF",
        updated: "Cập nhật 2026",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi",
    fallbackLng: "vi",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
