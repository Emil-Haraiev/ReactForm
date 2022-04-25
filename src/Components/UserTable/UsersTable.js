import React, {useState} from 'react';
import './styles.css'

const UsersTable = ({users, setUsers}) => {
    const [visibleIds, setVisibleIds] = useState([]);

    const handleShow = (id) => {
        setVisibleIds(prevState => [...prevState, id])
    }

    const handleHide = (id) => {
        const items = visibleIds.filter(item => item !== id);
        setVisibleIds(items)
    }

    const onDelete = (id) => {
        const res = users.filter( user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(res));
        setUsers( res)
    }

    return (
        <div className={'userTable_container'}>
            <div className={'userTable_head'}>
                <div className={'userTable_head-item'}>ФИО</div>
                <div className={'userTable_head-item'}>Почта</div>
                <div className={'userTable_head-item'}>Возраст</div>
                <div className={'userTable_head-item'}>Адрес</div>
            </div>
            {users.map(user => {
                const isInfoVisible = visibleIds.includes(user.id)

                user.name = user.name.length > 25 ?  `${user.name.substring(0, 20)}...` : user.name;
                user.address = user.address.length > 25 ?  `${user.address.substring(0, 20)}...` : user.address;

                return (
                    <div className={'userTable_wrapper'}>
                        <div style={{borderBottom: '1px solid deepskyblue', paddingBottom: 7}}>
                            <div key={user.id} style={{justifyContent: isInfoVisible  ? 'space-around' : 'flex-start'}} className={'userTable_item'}>
                                <div>{user.name}</div>
                                {isInfoVisible && (
                                    <>
                                        <div>{user.email}</div>
                                        <div>{user.age}</div>
                                        <div>{user.address}</div>
                                    </>
                                )}
                            </div>
                            {!isInfoVisible && (
                                <button className={'fn_button'} onClick={() => handleShow(user.id)}>Подробнее</button>
                            )}
                            {isInfoVisible && (
                                <button className={'fn_button'} onClick={() => handleHide(user.id)}>Скрыть</button>
                            )}
                            <button
                                className={'fn_button'}
                                onClick={() => onDelete(user.id)}>
                                Удалить
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default UsersTable;
