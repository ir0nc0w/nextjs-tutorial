export default function SignUp() {
    return (
        <div className="p-20">
            <h4>Sign up</h4>
            <form action="/api/post/signup" method="POST">
                <input name="user" placeholder="User ID"/>
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit">Button</button>
            </form>
        </div>
    )
}