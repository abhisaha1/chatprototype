# Snapengage - Frontend Test

### Technologies Used
React & Redux in the FrontEnd running on NodeJS server using Express.

### Architecture:
**Client**  is the main folder of the application. It has been further structured into multiple folders. Each folder has it own responsibility. Containers can be considered as views while components are reusable components which are used in containers.

The file **client/serverRendering.js** is meant to handle code execution on server. However not every file is required to be rendered on the server. If we need server rendering then the component should have a static variable by the name preFretch. Like below:

```js
export class Home extends Component {
    static prefetchData = [
        (params) => ActionCreators.getData(params)
    ];
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}

### Incomplete Tasks
**The third column, but made sure the data reaches the third column**.
**Didnt take care of fonts**
**Couple of colors might look a bit differemt**

### Confusing points
-To export the assets, it would have been nice if the assets were named with extension .png. Saves a bit of time for exporting
-The sample data had no info about the contact list. Linking the contact list with the threads was easy but I found the data to be unorganised.

### Running the app
```
npm install
npm run dev
open http://localhost:4040
```

