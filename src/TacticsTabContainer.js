import React, {Component} from 'react';


const TableHeader =() => {
    return(
        <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
    </thead>
    )
}

const TableData = props =>{
    if( typeof props === 'object'){
        return (
            <td>{props.data}</td>
        )
    }
    else if(props.constructor === Array){
        return(
            ///<DropDown data={props} />
            <td>DropDown</td>
        )
    }
    else {
        return <td>{props.data}</td>
    }

}

const TableBody = props => { 
   
    const rows = Object.keys(props.data).map((key,index) => {
        return (
            <tr key={index}>
                <td>{key}</td>
                {TableData(props.data)}
 
            </tr>
        );
    });
    console.log(props);
    let keys = Object.keys(props.data);
    console.log(keys);
     return <tbody>{rows}</tbody>;

}


class TacticsTabContainer extends Component {
    render() {
        const { data } = this.props;

        return (
           <table>
               <TableHeader />
               <TableBody data ={data} />
 
            </table>
        );
    }
}

export default TacticsTabContainer;