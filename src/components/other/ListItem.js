import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import React from 'react'

function ListItem(props) {
    library.add(fas, far, fab);
    return (
        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="" data-original-title={props.title}>
            <FontAwesomeIcon icon={props.icon} className="font-icon mb-2" /> 
            <h4>{props.data}</h4>
        </li>
    )
}

export default ListItem
