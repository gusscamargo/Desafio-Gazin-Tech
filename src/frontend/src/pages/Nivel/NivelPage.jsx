import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchById } from "../../features/nivel/fetchById"

import NivelForm from "../../components/NivelForm"


const NivelPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const nivel = useSelector(state => state.nivel)

    const [data, setData] = useState(nivel.value.data)    
    const [form, setForm] = useState(
        <NivelForm />
    )

    // Baixar dados
    useEffect(
        () => dispatch(fetchById(id)),
        []
    )
    
    // Setar dados
    useEffect(
        () => setData(nivel.value.data),
        [nivel]
    )

    useEffect(
        () => setForm(
                <NivelForm
                    nivel={data.nivel}
                />
            ),
        [data]
    )

    return form
}

export default NivelPage
