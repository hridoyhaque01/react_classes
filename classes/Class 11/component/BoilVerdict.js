export default function BoilVerdict({celsius = 0}){
    if(celsius >= 100){
        return <p>The Water would boil</p>
    }

    return <p>The Water would not boil</p>

}