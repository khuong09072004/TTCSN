import './Footer.scss'
import Logo from '../../assets/images/logo2.png'
const Footer = () =>{

    return(
         <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Udemy Business</h3>
          <ul>
            <li>Giảng dạy trên Udemy</li>
            <li>Tải ứng dụng</li>
            <li>Giới thiệu</li>
            <li>Hãy liên hệ với chúng tôi</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Nghề nghiệp</h3>
          <ul>
            <li>Blog</li>
            <li>Trợ giúp và Hỗ trợ</li>
            <li>Đơn vị liên kết</li>
            <li>Nhà đầu tư</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Điều khoản</h3>
          <ul>
            <li>Chính sách về quyền riêng tư</li>
            <li>Cài đặt cookie</li>
            <li>Sơ đồ trang web</li>
            <li>Tuyên bố về khả năng tiếp cận</li>
          </ul>
        </div>
        <div className="footer-right">
          <button className="language-btn">
            <span role="img" aria-label="language">🌐</span> Tiếng Việt
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={Logo} alt="Udemy Logo" /> 
        </div>
        <div className="footer-copyright">
          © 2024 Udemy, Inc.
        </div>
      </div>
    </footer>
        
    )
}
export default Footer