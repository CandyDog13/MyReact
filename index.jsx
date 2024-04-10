const user = {
    id : 5,
    age : 33,
    firstName: 'Tom',
    lastName: 'Smit',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
const userClassName = "user-info";
const styleObj = {
    color: 'red',
    fontFamity: 'Verdana'
};
const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <div id={user.id} className={userClassName} style={styleObj}>
        <p>Полное имя: {user.getFullName()}</p>
        <p>Возраст: {user.age}</p>
        <p>Время генерации данных: {new Date().toLocaleDateString()}</p>    
    </div>// элемент, который мы хотим создать
 );