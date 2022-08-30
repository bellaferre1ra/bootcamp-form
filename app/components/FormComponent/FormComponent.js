const React = require('react');
const { useState } = React;
const TextField = require('@andes/textfield');
const Form = require('@andes/form');
const Dropdown = require('@andes/dropdown');
const { DropdownItem } = Dropdown;
const Checkbox = require('@andes/checkbox');
const Button = require('@andes/button')


const FormComponent = (args) => {
    const [values, setValues] = useState({});

    const [form, setForm] = useState([]);

    const [error, setError] = useState({});

    function handleRegistration(e) {
        e.preventDefault()
        const errors = {
            productName: !Boolean(values.productName),
            description: !Boolean(values.description),
            country: !Boolean(values.country),
            category: !Boolean(values.category),
            thumbnail: !Boolean(values.thumbnail),
            brand: !Boolean(values.brand)
        }
        setError(errors)
        for (let key in errors) {
            if (error[key]) return
        }

        setForm([...form, values])
        setValues({
            id: 0,
            productName: '',
            description: '',
            country: '',
            category: '',
            thumbnail: '',
            brand: ''
        })

    }

    function onChange({ target: { id, value, name } }) {
        setValues({
            ...values,
            [id]: value,
        });
    }
    function dropdownHandler(key, value) {
        setValues({
            ...values,
            [key]: value,
        });

    }
    console.log(values)
    return (<>
        <Form {...args}>
            <TextField
                label="Nome do Produto"
                width={150}
                modifier={error['productName'] ? 'error' : 'default'}
                onChange={onChange}
                value={values['productName']}
                id="productName"
            />

            <TextField
                label="Descrição do Produto"
                width={150}
                modifier={error['description'] ? 'error' : 'default'}
                onChange={onChange}
                value={values['description']}
                id="description"
            />

            <Dropdown
                type="form"
                label="País"
                placeholder="Selecione a Categoria"
                onChange={(e, f) => dropdownHandler('country', f)}


            >
                <DropdownItem value="brasil" primary="Brasil" />
                <DropdownItem value="argentina" primary="Argentina" />
                <DropdownItem value="alemanha" primary="Alemanha" />
                <DropdownItem value="chile" primary="Chile" />
                <DropdownItem value="venezuela" primary="Venezuela" />

            </Dropdown>
            <Dropdown
                type="form"
                label="Categoria"
                placeholder="Selecione a Categoria"
                onChange={(e, f) => dropdownHandler('category', f)}

            >
                <DropdownItem value="comida" primary="Comida" />
                <DropdownItem value="roupa" primary="Roupa" />
                <DropdownItem value="casa" primary="Casa" />
                <DropdownItem value="carro" primary="Carro" />
                <DropdownItem value="esporte" primary="Esporte" />
            </Dropdown>
            <TextField
                label="Marca"
                width={150}
                modifier={error['brand'] ? 'error' : 'default'}
                onChange={onChange}
                value={values['brand']}
                id="brand"

            />
            <TextField
                label="Thumbnail"
                width={150}
                modifier={error['thumbnail'] ? 'error' : 'default'}
                onChange={onChange}
                value={values['thumbnail']}
                id="thumbnail"

            />

            <p>Entrega</p>
            <div className="checkbox-story-container">
                <Checkbox
                    checked
                    label="Envio a domicílio"
                    type="embedded"
                />
            </div>

            <div className="checkbox-story-container">
                <Checkbox
                    checked
                    label="Retirada em filial"
                    type="embedded"
                />
            </div>

            <div className="checkbox-story-container">
                <Checkbox
                    checked
                    label="Retirada na loja"
                    type="embedded"
                />
            </div>

            <div className="checkbox-story-container">
                <Checkbox
                    checked
                    label="Todos"
                    type="embedded"
                />
            </div>

            <Button type="submit" onClick={handleRegistration}>
                Submit
            </Button>

        </Form >
        <div>
            {form.map((dados) => (
                <div key={dados.id}>  <p>{dados.productName}</p>
                    <p>{dados.description}</p>
                    <p>{dados.country}</p>
                    <p>{dados.category}</p>
                    <p>{dados.thumbnail}</p>
                    <p>{dados.brand}</p>
                </div>
            ))}
        </div>
    </>
    );
}


module.exports = FormComponent;
