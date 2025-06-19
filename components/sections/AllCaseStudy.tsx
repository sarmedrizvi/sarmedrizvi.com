import { caseStudies } from '@/data/case-studies-data';
import Link from 'next/link';

function AllCaseStudies() {

  return (
    <div className="container py-5 ">
      {caseStudies.map((study, index) => (
          <Link href={`/case-study/${study.id}`}>
        <div
          key={index}
          className="bg-dark text-dark case-study-border-radius overflow-hidden d-flex flex-column flex-md-row mb-4 mx-8"
          style={{ borderRadius: '1rem' }}
        >
          {/* LEFT: Content - 60% */}
          <div className="p-4 p-md-5 flex-grow-1 d-flex flex-column justify-between" style={{ flexBasis: '60%' }}>
            <div>
              <p className="text-danger my-2 fs-3">Case Studies</p>
              <div className="d-flex gap-3 mt-2 mb-4">
                <span className="text-dark fs-3">
                  {study.tags.join(" | ")}
                </span>
              </div>
              <hr className="border-secondary" />
              <h3 className="text-dark my-3">{study.title}</h3>
              <p className='fw-light text-dark my-4 fs-5'>{study.description}</p>
              <hr className="border-secondary" />
            </div>

            {/* Logo and Info */}
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mt-3 w-100">
              <span>
                <img src="/assets/imgs/case-study/telehealth-logo.svg" alt="Telehealth Logo" />
              </span>
              <div className="d-flex gap-4 flex-wrap align-items-center">
                <span className="text-dark d-flex align-items-center gap-2">
                  <img src="/assets/imgs/case-study/pin-location.svg" alt="Location Icon" />
                  {study.location}
                </span>
                <span className="text-dark d-flex align-items-center gap-2">
                  <img src="/assets/imgs/case-study/field-icon.svg" alt="Field Icon" />
                  {study.field}
                </span>
                <span className="text-dark d-flex align-items-center gap-2">
                  <img src="/assets/imgs/case-study/people-icon.svg" alt="People Icon" />
                  150+
                </span>
              </div>
            </div>
          </div>

          {/* CENTER: Stats - 10% */}
          <div
            className="bg-danger text-dark d-flex flex-column justify-content-center gap-6 text-center"
            style={{ flexBasis: '10%', minWidth: '100px' }}
          >
            {study.stats.map((stat, j) => (
              <div key={j}>
                <p className="m-2 fw-bold fs-1">{stat.value}</p>
                <p className="m-1 small">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: Image - 30% */}
          <div className="d-none d-md-block" style={{ flexBasis: '30%' }}>
            <img
              src={study.cardimage}
              alt={study.title}
              className="h-100 w-100"
              style={{
                objectFit: 'cover',
                borderTopRightRadius: '1rem',
                borderBottomRightRadius: '1rem'
              }}
            />
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default AllCaseStudies;