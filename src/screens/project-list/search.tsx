import React from 'react';
interface User {
  id:string;
  name:string;
  organization:string
}
interface SearchParam  {
    user:User[],
    param:{
        name:string;
        personId:string;
    },
    setParam: (param:SearchParam['param']) => void
}
export const Search = ({user,param,setParam}:SearchParam) => {
   
    return (
        <form >
            <div>
                <input value={param.name} onChange={evt => setParam({
                    ...param,
                    name:evt.target.value
                })}/>
                <select onChange={evt => setParam({
                    ...param,
                    personId:evt.target.value
                })}>
                    <option value={''}>负责人</option>
                    {
                        user.map( u => ( <option key={u.id}  value={u.id}>{u.name}</option> ))
                    }
                </select>
            </div>
        </form>
    )
}