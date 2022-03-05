import './horarios.css'
import portada from './img/Portada 3dtisk 1.jpg'

export default function Horarios(){
    return (
      <div className='horarios'>
        <img src={portada} alt='horario' className='img-fluid' />
      </div>
    );
}