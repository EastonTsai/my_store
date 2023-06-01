import 'styles/footer.scss';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer_container container">
        <div className="footer_title">
          <h2>My Store_電商平台</h2>
          <p>Front-end 求職作品 </p>
        </div>
        <div className="footer_technology">
          <h2 className="technology_title">使用到相關技術 :</h2>
          <p>•React</p>
          <p>•scss</p>
          <p>•typescript</p>
        </div>
      </div>
      <div className="footer_name">
        <p>Easton Tsai @ 2023.6</p>
      </div>
    </footer>
  )
}
export default Footer