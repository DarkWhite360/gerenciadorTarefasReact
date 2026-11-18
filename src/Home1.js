import '.App.css';


function App(){
    const [isAutenticated, setIsAutenticated] = useState(false);

    return(
        <div>
            // Passamos a função onLoginSuccess para o componente Login atualizar o estado pai
            {!isAutenticated ? (
               <Login onLoginSucess={()=> setIsAutenticated(true)} /> 
            ):(
                <Home />
            )}
        </div>
    );
}