import Exit from "./icons/Exit";
function CertificationsViewer({ img, title, setToggleViewer, toggleViewer }) {
  return (
    <>
      {toggleViewer && (
        <>
          <div className="container-viewer">
            <div className="container-viewer-things">
              <div
                className="container-exit"
                onClick={() => setToggleViewer(false)}
              >
                <Exit />
              </div>
              <img
                src={img}
                alt={`Certificado de ${title}`}
                title={`Certificado de ${title}`}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CertificationsViewer;
