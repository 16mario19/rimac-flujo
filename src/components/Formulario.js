
const Formulario = () => {

    return (
        <div class="formulario">
            <h3 class="noaline" >Déjanos tus datos</h3>
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
                <p>
                Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
                </p>
            </div>
            <button 
             type="button">COTíZALO</button>
        </div>
    );
}

export default Formulario;