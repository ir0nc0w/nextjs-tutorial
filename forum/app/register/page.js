export default function Register() {
    return (
        <div>
            <form method="POST" action="/api/auth/signup">
                <input name="name" type="text" placeholder="Name" />
                <input name="email" type="text" placeholder="E-mail" />
                <input name="password" type="password" placeholder="Password" />
                <input name="role" type="hidden" value='normal' />
                <button type="submit">ID/PW Register Requst</button>
            </form>
        </div>
    )
}