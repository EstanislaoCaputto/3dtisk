import './horarios.css'

export default function Horarios({horasLocal, diasLocal, horasOficina, diasOficina}){
    return (
      <div className="horarios">
        <div className="letras">
          <p>
            Horario De Atencion <br /> Local Paseo Poeta Lugones: <br /> {diasLocal} <br/> {horasLocal}
          </p>
        </div>
        <div className="letras">
          <p>
            Horario De Atencion <br/> Oficina Calle Italia 1963: <br /> {diasOficina} <br/> {horasOficina}
          </p>
        </div>
      </div>
    );
}