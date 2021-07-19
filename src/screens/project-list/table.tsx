import React from 'react';
interface User {
    id:string;
    name:string;
    organization:string
  }
interface Product{
    id:string;
    name:string;
    personId:string;
    organization:string;
    created:string;
}

interface TableInf {
    list:Product[],
    user:User[]
}
export const Table = ({list,user}:TableInf) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(pro => (
                        <tr key={pro.id}>
                            <td>{pro.name}</td>
                            <td>{user.find(u => u.id === pro.personId)?.name || '未知'}</td>
                        </tr>
                    ))
                }
                </tbody>
        </table>
    )
}