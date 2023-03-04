import React from 'react'
import { InputGroup, FormControl, Pagination, Card, Button } from 'react-bootstrap'
import style from './search.module.css'

function Search() {
    return (
        <div className="head">
            <InputGroup className="mb-3">
                <FormControl className={style.input_search} placeholder="Tap To Search For Something" aria-label="Tap To Search For Something" aria-describedby="basic-addon2" />
                <Button className={style.btn_search} id="button-addon2">
                    <img src="https://i.ibb.co/PWtqWHZ/Vector.png" alt="" />
                </Button>
                <div className={style.but_alt}>
                    <Button className={style.btn_w} style={{ margin: '0 20px 0 20px' }}>
                        <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" />
                    </Button>
                    <Button className={style.btn_w}>
                        <img src="https://i.ibb.co/MhwpH7b/Vector.png" alt="" />
                    </Button>
                </div>
            </InputGroup>
        </div>
    )
}

export default Search
