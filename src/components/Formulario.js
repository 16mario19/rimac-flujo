
const Formulario = () => {

    return (
        <div class="formulario">
            <h4 class="noaline" >Déjanos tus datos</h4>
            <div class="formulario__inputComp">
                <select>
                    <option>DNI</option>
                    <option>CARNET EXT.</option>
                </select>
                <input placeholder="Nro. de doc"></input>
            </div>
            <div class="formulario__input">
                <input placeholder="Celular"></input>
            </div>
            <div class="formulario__input">
                <input placeholder="Placa"
                ></input>
            </div>
            <div class="formulario__policy noaline">
                <input class="formulario__checkPolicy" type="checkbox" />
                <p class="policyFont">
                Acepto la 
                <a href="#">
                 Política de Protección de Datos Personales
                </a> y 
                los 
                <a href="#">
                Términos y Condiciones.

                </a>
                </p>
            </div>
            <button 
             type="button">COTíZALO</button>
        </div>
    );
}

export default Formulario;