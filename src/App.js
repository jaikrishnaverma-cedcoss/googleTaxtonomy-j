import data from "./data.txt";
import "./App.css";
import { useEffect, useState } from "react";
import Optioner from "./Container/option";
function App() {
  let [state, setState] = useState([]);
  // auto run when component mount
  useEffect(() => {
    fetch(data)
      .then((r) => r.text())
      .then((text) => {
        let x = text.split("\n");
        x.splice(0, 1);
        setState([{ name: "Taxtonomy list", listObj: Taxtonomy(x) }]);
      });
  }, []);
  // split and trim extra spaces of keys
  const spliter = (text) => {
    text = text.toString();
    let x = text.split(">");
    text = x.map((h) => h.trim());
    return text;
  };
  // this responsible for main logic for hierarchy
  const Taxtonomy = (str) => {
    let obj = {};
    str.map((x) => {
      var createNestedObject = (base, names) => {
        for (var i = 0; i < names.length; i++) {
          base = base[names[i]] = base[names[i]] || {};
        }
      };createNestedObject(obj, spliter(x));
    });
    
    return obj;
  };
  // on change any dropdown value
  const Selector = (str, obj,i) => {
    if(i<state.length)
    state.splice(i+1)
    state.push({ name: str, listObj: obj });
    setState([...state]);
  };
  // uncomment below code for check hierarchy
  // console.log('final hierarchy',state);

  return (
    <div className="container py-4 col-12 col-sm-10 col-md-6" >
      <h4 className="mb-4">Google Category</h4>
      {state.map((obj, i) => {
        return (
          <div key={obj.toString()} className="input-group mb-3">
            <label className={`input-group-text ${(Object.keys(obj.listObj).length===0)?'bg-danger text-white':'bg-warning'}`} htmlFor="inputGroupSelect01">
              {obj.name}
            </label>
            <select className='form-select'  id="inputGroupSelect01"
              onChange={(e) => {
                e.target.value !== "-1" &&
                  Selector(e.target.value, obj.listObj[e.target.value],i);
              }}>
                {
                (Object.keys(obj.listObj).length===0)?
                 <option  value='-1'> No List Available in this Category..!</option>
                :<option  value="-1"> - - Select- - </option>
                }
              <Optioner arr={Object.keys(obj.listObj)} />
            </select>
          </div>
        );
      })}
    </div>
  );
}
export default App;
