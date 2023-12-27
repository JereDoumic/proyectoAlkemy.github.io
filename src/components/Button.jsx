function Button({label, tarea}) {

    // const { label } = props;

    const styles = {
        margin: '0 100px'
    }

    return (
        <button onClick={() => tarea(label)} style={styles}>{label}</button>
    )
}

export default Button;