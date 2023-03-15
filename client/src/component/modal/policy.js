import React, { useState } from "react";
import { Modal } from "antd";
import "./modal.css";

function PolicyModal({ isModalOpen, setIsModalOpen }) {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        className="policyModal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div class="modal-dialog" >
          <div class="modal-body">
            <h1 className="modal-p-header1">UNIVERSITY OF GREENWICH</h1>
            <h2 className="modal-p-header2">Social Media Website Policy</h2>
            <h3 className="modal-p-content1">
              This social media website policy outlines the guidelines and
              principles that govern the use of our website. It is essential to
              read and understand this policy before using our website. By using
              this website, you agree to comply with the guidelines and policies
              outlined below.
            </h3>
            <h2 className="modal-p-content">User Conduct</h2>
            <p className="modal-p-content">
              Our social media website values respectful, ethical, and
              responsible behavior. As such, we expect all users to adhere to
              the following guidelines:
            </p>
            <ol>
              <li>
                1. Do not post content that is discriminatory, offensive,
                defamatory, or otherwise harmful to others.
              </li>
              <li>
                2. Do not post content that is illegal, obscene, or that violates
                the rights of others, including intellectual property rights.
              </li>
              <li>
                3. Do not harass or bully other users, and do not engage in any
                behavior that may be considered cyberbullying.
              </li>
              <li>
                4. Do not impersonate other individuals, including our employees,
                or use our website to commit fraud or engage in any other
                illegal activities.
              </li>
              <li>
                5. Do not post spam or engage in any behavior that may be
                considered spamming.
              </li>
              <li>
                6. Do not use our website to distribute viruses, malware, or other
                harmful software.
              </li>
              <li>
                7. Do not collect or use personal information about other users
                without their consent.
              </li>
              <li>
                8. Do not attempt to gain unauthorized access to our website or its
                systems.
              </li>
            </ol>
            <h2 className="modal-p-content">Content Guidelines</h2>
            <p className="modal-p-content">
              Our social media website values diverse and meaningful
              conversations. As such, we expect all users to adhere to the
              following content guidelines:
            </p>
            <ol>
              <li>
                1. Users are solely responsible for the content they post on our
                website. Our website does not endorse or verify the accuracy of
                any user-generated content.
              </li>
              <li>
                2. Users must respect the intellectual property rights of others,
                including copyrights, trademarks, and patents.
              </li>
              <li>
                3. Users must not post any content that infringes on the
                intellectual property rights of others.
              </li>
              <li>
                4. Users must not post any content that is illegal, obscene, or
                that violates the rights of others.
              </li>
              <li>
                5. Users must not post any content that may be considered spam or
                engage in any behavior that may be considered spamming.
              </li>
            </ol>
            <h2 className="modal-p-content">Moderation</h2>
            <p className="modal-p-content">
              Our social media website reserves the right to moderate content
              posted on our website to ensure compliance with our policies. Our
              moderation process may include:
            </p>
            <ol>
              <li>
                1. Reviewing user-generated content to ensure compliance with our
                guidelines and policies.
              </li>
              <li>2. Removing content that violates our policies.</li>
              <li>
                3. Suspending or terminating user accounts that violate our
                policies.
              </li>
              <li>
                4. Reporting illegal activities to the appropriate authorities.
              </li>
              <li>5. Cooperating with law enforcement agencies as necessary.</li>
            </ol>
            <h2 className="modal-p-content">Conclusion</h2>
            <p className="modal-p-content">
              Our social media website is committed to providing a safe and
              welcoming environment for all users. We reserve the right to
              modify or update our policies at any time without notice. By using
              our website, you agree to comply with our policies and guidelines
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export { PolicyModal };
