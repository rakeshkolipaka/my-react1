import Card from 'react-bootstrap/Card';

function Users(props){

    return(
        <div className='userCard'>
            <h1>{props.name.toUpperCase()}</h1>
            <h3>Age: {props.age}</h3>
        </div>
    )
}
export default Users