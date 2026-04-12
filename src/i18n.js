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
      nav: {
        home: "Home",
        project: "Projects",
        about: "About",
        contact: "Contact",
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
      nav: {
        home: "Trang chủ",
        project: "Dự án",
        about: "Giới thiệu",
        contact: "Liên hệ",
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
