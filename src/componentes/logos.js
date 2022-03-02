import logo3n3 from './img/logo 3n3.png'
import logoanet from './img/logo anet.png'
import logoartillery from './img/logo artillery.png'
import logobiqu from './img/logo biqu.png'
import logocreality from './img/logo creality.png'
import logogrilon from './img/logo grilon3.png'
import logohellbot from './img/logo hellbot.png'
import logoprintalot from './img/logo printalot.png'
import logotronxy from './img/logo tronxy.png'
import logowanhao from './img/logo wanhao.png'
import './logo.css'

export default function Logos(){
    return(
        <div className="container">
            <div className='container-img'>
                <img className="img fluid" src={logo3n3} alt="foto logo"></img>
            </div>
            <div className='container-img'>
                <img className="img fluid" src={logoanet} alt="foto logo"></img>
            </div>
            <div className='container-img'>
                <img className="img fluid" src={logoartillery} alt="foto logo"></img>
            </div>
            <div className='container-img'>
                <img className="img fluid" src={logobiqu} alt="foto logo"></img>
            </div>
            <div className='container-img'>
                <img className="img fluid" src={logocreality} alt="foto logo"></img>
            </div>
            <div className='container-img'>
                <img className="img fluid" src={logogrilon} alt="foto logo"></img>
            </div>
            <div className='container-img'>
                <img className="img fluid" src={logohellbot} alt="foto logo"></img>
            </div>
            <div className='container-img'>
                <img className="img fluid" src={logoprintalot} alt="foto logo"></img>
            </div>
            <div className='container-img'>
                <img className="img fluid" src={logotronxy} alt="foto logo"></img>
            </div>
            <div className='container-img'>
                <img className="img fluid" src={logowanhao} alt="foto logo"></img>
            </div>
        </div>
    )
}