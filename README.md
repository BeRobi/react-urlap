### 1. `KOMPONENS`<br>
a React legfontosabb építőegysége. A Reacttal épített appokban gyakorlatilag minden komponensekből áll. 
A komponens a UI egy önálló, újrafelhasználható darabja, amely egy jól körülírt feladatot lát el. A komponensek egymástól független, önmagukban megálló kóddarabok. 
Kétfajta komponens létezik a Reactban:<br>
• a function component és<br>
• a class component.<br>
Mindkettő befogad adatokat a props objektumon keresztül, és mindkettő React-elemeket ad vissza, amelyek leírják, hogy mi jelenjen meg a képernyőn.
A React-komponensek koncepcionálisan olyanok, mint a JavaScript-függvények. Inputot fogadnak be a props objektumon keresztül, és React-elemeket adnak vissza, amelyek leírják, hogy mi történjen a képernyőn.

### 2. `JSX`<br>
egy „syntax extension”, amellyel  HTML-szerűen írhatunk  a JavaScriptünkbe. Rendereléskor a React JS kóddá alakítja. NEM HTML! 

### 3. `PROPS`<br>
segítségével adatokat adhatunk át a komponensek között.
Mindig a szülő komponens adja át a gyerek komponensnek a paraméterként megadott adatot.
Értéke a gyerekelemben nem változtatható.
A props lehetővé teszi, hogy a state-ben tárolt adatokat a gyermekek is megkaphassák.
A szülőelem a props-ban átadja a saját függvényét, melyet a gyerekelemben meghívhatunk.
Egy  komponens sosem módosíthatja a saját props-át!
A  `props` segítségével saját state-et módosító metódusokat is át tudunk adni a gyermekkomponenseknek, ezzel lehetővé téve, hogy a gyermek frissítse a state-et.

### 4. `STATE`<br>
minden komponensnek van egy saját állapota, melyet a STATE reprezentál. A state állapotértékeinek megváltoztatásával automatikusan újragenerálódik a komponens. 
Függvénykomponensek esetén ehhez a useState hook-ot használjuk.
A props nem módosítható, a state viszont igen!
State elérése: this.state.kulcsNév
State beállítása
const [state, setState] = useState("kezdoertek");
setState( state uj értéke )  függvénnyel tudjuk megváltoztatni. 
A setState meghívásával újrarendelerődik a komponens. 
A változás nem biztos, hogy azonnal megtörténik. 
A state-t a közös ősben kell létrehozni az eseménykezelőkkel.
A state objektum  csak az azt birtokló komponens számára hozzáférhető, csak az módosíthatja! A gyerekkomponensek nem! A benne tárolt adat pedig a komponens gyerekei számára is hozzáférhető a props-okon keresztül. 
Ha egy adathoz több komponensnek is hozzá kell férni, akkor a legközelebbi közös őst és abban tároljuk. 




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
