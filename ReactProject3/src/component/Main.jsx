/**
 * Challenge: Build out the main content section!
 * 
 * For now, skip 2 aspects of the design and we'll work on them later:
 *   1. The colored bullets in the list
 *   2. The larger gray React logo on the side
 */

export default function Main(){
    return (
        <main>
            <h1>Fun facts about react</h1>
                <ul className="facts-list">
                    <li>Was FUrst released in 1981</li>
                    <li>Was originally created by John Wick</li>
                    <li>Has well over 200k station Github</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
        </main>
    )
}