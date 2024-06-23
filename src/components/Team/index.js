import './index.css'

const Team = (props) => {

    const styles = {
        secondaryColor: props.primaryColor,
    }

    return (
        <section className='team' style={styles.secondaryColor}>
            <h3 > {props.teamName}</h3>
        </section>
    )
}

export default Team