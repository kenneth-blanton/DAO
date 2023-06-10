import { ConnectWallet } from '@thirdweb-dev/react';



export default function Header2 (){
    return (
        <section className="bg-half-170 d-table w-100 overflow-hidden" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="title-heading">
                <div className="alert alert-light alert-pills" role="alert">
                  <span className="badge bg-primary rounded-pill me-1">Dashboard</span>
                  <span className="content text-muted"> Learn anythting with Appgen</span>
                </div>
                <h1 className="heading mb-3">Make anything develop <br /> with Appgen</h1>
                <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                <div className="mt-4">
                  <a href="javascript:void(0)" className="btn btn-pills btn-primary">Get Started</a>
                </div>
              </div>
            </div>{/*end col*/}
            <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="dashboard-shape-two app-image-fluid">
                <img src="/src/themes/appgen/images/saas/saas-2.png" alt="" />
              </div>
            </div>{/*end col*/}
          </div>{/*end row*/}
        </div>{/*end container*/}
      </section>
    )

}
