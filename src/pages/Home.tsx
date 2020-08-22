import React from 'react'
import {Link} from 'react-router-dom'
import bg from '../assets/images/bg8.jpg'

const Home = () => {
  return (
    <>
      <div className="page-header header-filter" style={{backgroundImage: `url("${bg}")`}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="title">Очень важный заголовок.</h1>
              <h4>Много букв после заголовка, это обязательно для каждого сайта.</h4>
              <br/>
              <Link className="btn btn-danger btn-raised btn-lg" to={{pathname: '/bots'}}>
                <i className="fa fa-play"/> Ваши боты
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container">
          <div className="section text-center">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h2 className="title">Как юзать</h2>
              </div>
            </div>
            <div className="features">
              <div className="row">
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="fa fa-sign-in"/>
                    </div>
                    <h4 className="info-title">Зарегистрируйтесь</h4>
                    <p>Простая регистрация с подтверждением email. Справится даже собака.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-success">
                      <i className="fa fa-plus"/>
                    </div>
                    <h4 className="info-title">Создайте бота</h4>
                    <p>Создайте своего бота с помощью
                      <a href="https://telegram.me/BotFather"> BotFather</a> и получите
                      его токен(в гугле есть куча инфы на эту тему).</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="fa fa-cog"/>
                    </div>
                    <h4 className="info-title">Добавьте бота</h4>
                    <p>И последнее,
                      <Link to={{pathname: '/bots'}}> добавьте</Link> бота в админке, укажите токен.
                      Создайте возможные фразы совпадения и фразы ответы. И все заработает!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home