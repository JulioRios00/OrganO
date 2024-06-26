# How to start the project:
    npm start
# How to build:
    npm run build

## Learning anotations

    This project is made only for learning the framework React. In this readMe, you can see how i made my learning process.

<!-- ------------------------------------------------- -->

# Figma 

https://www.figma.com/design/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?node-id=134-128

## Creating a list (using select)

    This list must be prepared to receive any details and specificities sent from the database
 
    I created a component called Dropdown to be a generic list component for any section of the application 

    We will use the props to set the informations for our component and after that we will use the native JS methos .map() to return to us a new list with the teams that must be presented by the Dropdown component. Always remember to set a key when you using a list because React will show a error on your console. Key values are important for identify and control your components and etc...

## Creating the button

    How to insert information besides texts through props?
    The React are prepared for theses scenario and the solution is to use CHILDREN components. To use this tool, instead of using props.text (in this case), you can use props.children, like this:
    
        const Button = (props) => {
            return <button className="Button">{props.children}</button>;
        };

## How the button reacts to the user click?

    Because we are sending informations by using a form, we can use the onSubmit native function to "listen" the action. The problem is: when  the informations are sended, a default behavior is trigered and the page is reloaded. To prevent this behavior, we can set the "JS event" in the function created to control the submit and call the "preventDefault()" method to stop this behavior, like this:

    const submitInfo = (event) => {
        event.preventDefault()
        console.log("Form foi submetido")
    }

## How to listen inputed information?

    On JS, we can use the event.target.value to listen the inserted information by the user, like this:

    const onInserted = (e) => {
        console.log(e.target.value)
    } 

    Every JS event have a target with inumerous properties and the value is one of this properties.

## How to manage component's lifecycle?

    We use React Hooks to manipulate anything on DOM. To update this particular input, we will use the useState to "watch" the component changes and allow this component to re-render, like this:

    const [name, setName] = useState("");
        we declare a const that the first item of the [] will be the name of the variable we want and the second item is a "function" that will define the value of the variable when we call this and set the value in the (). By default, we set a value to the variable when we call the useState(set you default value here). In this case, we are setting a empty string by default value.

     <TextField
          label="Nome"
          value={name}
          required={true}
          onChanged={(value) => setName(value)}
          placeholder="Digite seu nome"
        />

    This is a use of the ***set_value***: we call the setName and, when the user insert a value on the TextField component, the character he insert's will be added to the *name* variable.



meuNome = "ashufhas"

MeuNome = "ahusifuiashdfua"

meu_nome = "asiufhdas"

## Other ways to sendo props for children components

    We can use diferent ways to "tranfer" props for components in React. The most simple ways is to reference theses props by setting the term "props" in the function parameters, like these:

    const Dropdown = (props) => {
    
    const onInserted = (e) => {
        props.onChanged(e.target.value);
    };
    return (
        <div className="Dropdown">
            <label>{props.label}</label>
            <select
                onChange={onInserted}
                required={props.required}
                value={props.value}
            >
                {props.itens.map((item) => (
                <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
    };

    export default Dropdown;
    
    To use the props, you will have to add in the fields the "prop.yourValue" to set the values. 

    Also we can use a unstructured way to sendo the props, like these:

const TeamMember = ({name, role, image}) => {
    return  (
        <div className='teamMember'>
            <div children='header'>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default TeamMember

    In this case, the props are setted on the parameter field of the function but unstructered as an object with the fields that will needed to be used.