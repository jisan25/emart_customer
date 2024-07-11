const BreadCrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Fashion</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Traditional Wear</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Sarees
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
