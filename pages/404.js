import MainLayout from "../layout/MainLayout"
import Link from 'next/link'

function ErrorPage() {
    return (
        <MainLayout>
            <div className="mt-5">
                <h3 className="mb-4">Такой страницы не существует</h3>
                <Link href="/posts"><a className="btn btn-warning">Перейти на страницу постов</a></Link>
            </div>
        </MainLayout>
    )
}

export default ErrorPage