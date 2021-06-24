import MainLayout from '../layout/MainLayout'
import Link from 'next/link'

function Home() {
  return (
    <MainLayout>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Создание и просмотр постов</h1>
            <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe, soluta eligendi ducimus dolores eaque alias dolor. Nisi, dicta inventore?</p>
            <p>
              <Link href="/posts"><a className="btn btn-primary my-2">Посмотреть посты</a></Link>&nbsp;
              <Link href="/posts"><a className="btn btn-secondary my-2">Создать новый пост</a></Link>
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Home;