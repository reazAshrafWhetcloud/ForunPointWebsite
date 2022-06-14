import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BreadCrumb from "../muic/BreadCrumb";

const PrivacyPolicyPage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Privacy Policy",
      url: "/privacy-policy",
    },
  ];
  return (
    <Box className="global-main-margin">
      <Box>
        <Typography className="global-font-family global-main-heading center-contact-us">
          Privacy Policy
        </Typography>
        <Box className="bread-crumb-center">
          <BreadCrumb breadCrumb={breadCrumb} />
        </Box>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          Welcome to Forun Point!
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          Forun Point is owned and operated by Forun Point LLC.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          Forun Point values your privacy and the protection of your personal
          data. This privacy policy describes what information we collect from
          you, how we collect it, how we use it, how we obtain your consent, how
          long we retain it in our databases and, if necessary, with whom we
          share it.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          By registering as a user and using the platform, you are accepting the
          practices described in this Privacy Policy. Your use of the platform
          is also subject to our terms and conditions.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          This Privacy Policy may change from time to time. Your continued use
          of the platform after we make changes is deemed acceptance of those
          changes, so please check the policy periodically for updates. This
          privacy policy has been prepared and is maintained in accordance with
          all applicable national and international laws and regulations and, in
          particular, with the California Consumer Privacy Act (CCPA) and the
          Texas Privacy Act.
        </Typography>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          1. GENERAL INFORMATION
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          The personal data of the users that are collected and processed
          through the platform:
          <br />
          <ul>
            <li>Forun Point App (Available on Google Play and App store)</li>
            <li>
              <a href="https://www.forunpoint.com">
                https://www.forunpoint.com
              </a>
            </li>
          </ul>
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          Will be under responsibility and in charge of:
          <br />
          <ul>
            <li>Forun Point LLC.</li>
            <li>Email: info@forunpoint.com</li>
          </ul>
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          (Hereinafter referred to as “Forun Point”).
        </Typography>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          2. TYPES OF INFORMATION GATHERED
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          The information we collect from our users and customers helps us to
          deliver our products effectively and to personalize and continually
          improve the user experience on the platform. These are the types of
          information we collect:
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>Information You Give Us.</strong> You provide information when
          you provide, search, read and view content through the platform,
          register as a user (Drivers and Users), request and pay for a service
          through the platform, and/or communicate with us through our contact
          information or our contact forms. As a result of those actions, you
          might supply us with the following information:
          <br />
          <ul>
            <li>First and last name</li>
            <li>Date of birth</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>
              Any additional information relating to you that you provide to us
              directly or indirectly through our platform or online presence
              such as ‘cookies’.
            </li>
          </ul>
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          Forun Point will not collect any personally identifiable information
          about you, unless you provide it.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>Information Collected Automatically:</strong> By accessing and
          using the platform you automatically provide us with the following
          information:
          <br />
          <ul>
            <li>
              The device and usage information you use to access the platform
            </li>
            <li>Your IP address</li>
            <li>Browser and device characteristics</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Your location</li>
            <li>What parts of the platform you use and how often</li>
          </ul>
          If you access the platform through a mobile phone, we will collect the
          following information:
          <br />
          <ul>
            <li>
              The device and usage information you use to access the platform
            </li>
            <li>Mobile device ID</li>
            <li>Model and manufacturer</li>
            <li>Operating system</li>
            <li>Version information</li>
            <li>IP address</li>
          </ul>
          <strong>Location:</strong> We store real-time information about the
          location of users registered in the application when they use the
          services available on the platform, accessing the GPS function built
          into the mobile devices of each user. This information is stored to
          facilitate the correct use of the application and provide specific
          services based on the user&#39;s location. This information is used
          for the time necessary to provide the services and is stored in each
          user&#39;s history. Users will be able to consult their service
          history through the platform. However, this information does not
          identify or individualize the person, it is completely anonymous. The
          user can request the removal of such information but certain
          functionalities of the application would not be available. Location
          information collected through the platform will be treated in
          accordance with this privacy policy.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>Payment information:</strong> Users&#39; payment information
          will be processed by the payment platforms available on the platform
          (Stripe, PayPal). These payment platforms will process and store your
          data securely and for the sole purpose of processing transactions for
          the purchase of subscriptions. Forun Point reserves the right to
          contract any payment platform available on the market, which will
          process your payment data for the sole purpose of processing
          transactions within the platform.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          See PayPal and Stripe&#39;s privacy policy here:
          <br />
          <ul>
            <li>
              <a href="https://stripe.com/gb/privacy">
                https://stripe.com/gb/privacy
              </a>
            </li>
            <li>
              <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full">
                https://www.paypal.com/us/webapps/mpp/ua/privacy-full
              </a>
            </li>
          </ul>
          <strong>GOOGLE Analytics.</strong> We use Google Analytics provided by
          Google, Inc., USA (“Google”). These tool and technologies collect and
          analyze certain types of information, including IP addresses, device
          and software identifiers, referring and exit URLs, feature use metrics
          and statistics, usage and purchase history, media access control
          address (MAC Address), mobile unique device identifiers, and other
          similar information via the use of cookies. The information generated
          by Google Analytics (including your IP address) may be transmitted to
          and stored by Google on servers in the United States. We use the
          GOOGLE Analytics collection of data to enhance the platform and
          improve our service.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          Please consult Google&#39;s privacy policy here:
          <br />
          <ul>
            <li>
              <a href="https://policies.google.com/privacy">
                https://policies.google.com/privacy
              </a>
            </li>
          </ul>
          <strong>Facebook Pixel:</strong> Our platform uses the Facebook Pixel.
          Through the Facebook Pixel we can collect user information for
          different purposes. We use the Facebook Pixel for the following
          purposes:
          <br />
          <ul>
            <li>
              Collect statistics about our platform (for example, the number of
              users who visited a page).
            </li>
            <li>
              Collect information about how you interact with our platform (for
              example, whether you opened or followed links contained in them).
            </li>
            <li>Personalize online services and marketing communications.</li>
            <li>
              Tailor advertisements to users and optimize advertising campaigns.
            </li>
          </ul>
          The information collected through the Facebook Pixel will be collected
          and stored by Facebook and will be treated in accordance with its
          privacy policy. The information we collect through the Facebook Pixel
          does not personally identify the user and will never be used for
          purposes other than those contained in this privacy policy and
          Facebook&#39;s privacy policy.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          Please consult Facebook&#39;s privacy policy here:
          <br />
          <ul>
            <li>
              <a href="https://www.facebook.com/privacy/explanation">
                https://www.facebook.com/privacy/explanation
              </a>
            </li>
          </ul>
          <br />
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          3. HOW LONG WE KEEP YOUR DATA
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          Personal data provided by users through the platform will be retained
          for the time necessary to provide the functionalities available on the
          platform and until the user maintains the user account on the platform
          or decides to close it or until Forun Point closes and deletes the
          user account. Forun Point may retain personal data for a longer period
          where the user has given consent to such processing, provided that
          such consent is not withdrawn. In addition, Forun Point may be obliged
          to retain personal data for a longer period if this is necessary for
          compliance with a legal obligation or by order of an authority. Once
          the retention period expires, the personal data will be deleted.
          Therefore, the right of access, the right of erasure, the right of
          rectification and the right to data portability cannot be asserted
          once the retention period has expired.
        </Typography>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          4. HOW WE USE YOUR INFORMATION.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          In general, we use the information we collect primarily to provide,
          maintain, protect and improve our platform and services. We use
          personal information collected through our platform as described
          below:
          <br />
          <ul>
            <li>
              Provide the platform (Available on Google Play and App store).
            </li>
            <li>Identify you as a user in our system.</li>
            <li>User registration (Drivers and Users).</li>
            <li>Provide services and show the routes.</li>
            <li>Process payments.</li>
            <li>Facilitate communications between users.</li>
            <li>Improve the platform.</li>
            <li>Understand and enhance your experience using our platform.</li>
            <li>
              Respond to your comments or questions through our support team.
            </li>
            <li>
              Send you related information, including confirmations, invoices,
              technical notices, updates, security alerts and support and
              administrative messages.
            </li>
            <li>
              Communicate with you about upcoming events, offers and news about
              products and services offered by Forun Point and our selected
              partners.
            </li>
            <li>Marketing purposes of Forun Point.</li>
            <li>
              Link or combine your information with other information we get
              from third parties to help understand your needs and provide you
              with better service.
            </li>
            <li>
              Protect, investigate and deter against fraudulent, unauthorized or
              illegal activity.
            </li>
          </ul>
        </Typography>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          5. HOW DO YOU GET MY CONSENT?
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          By registering as a user (Drivers and Users), requesting and paying
          for a service through the platform, communicating with us through the
          contact forms or our contact information and providing us with
          personal information to communicate with you, you consent to our
          collection, storage and use of your information on the terms contained
          in this privacy policy. You may withdraw your consent by sending us
          your request via the contact information or the contact page.
        </Typography>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          6. HOW WE SHARE INFORMATION
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          The personal information of our users is an important and fundamental
          part of our business. Under no circumstances will we sell or share
          information with third parties that has not been previously authorized
          by the user or owner of the personal data. We share user information
          solely and exclusively as described below.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>Third-Party Service Providers.</strong> We use third-party
          services to perform certain functions on our behalf and through our
          platform and services. Examples include processing payments (Stripe,
          PayPal), sending emails, analyzing data (Google Analytics), creating
          ads (Facebook, Google), providing marketing assistance and delivering
          search results.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          These third-party services and tools may have access to personal
          information needed to perform their functions, but may not use that
          information for other purposes. Information shared with these
          third-party services will be treated and stored in accordance with
          their respective privacy policies and our privacy policy.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>Business Transfers.</strong> In the event that Forun Point
          creates, merges with, or is acquired by another entity, your
          information will most likely be transferred. Forun Point will email
          you or place a prominent notice on our platform before your
          information becomes subject to another privacy policy.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>Protection of Forun Point and others.</strong> We release
          personal information when we believe release is appropriate to comply
          with the law, enforce or apply our Terms and conditions and other
          agreements, or protect the rights, property, or safety of Forun Point,
          our users or others. This includes exchanging information with other
          companies and organizations for fraud protection and credit risk
          reduction.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>With Your Consent.</strong> Other than as set out above, you
          will receive notice when personally identifiable information about you
          might go to third parties, and you will have an opportunity to choose
          not to share the information.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>Anonymous Information.</strong> Forun Point uses the anonymous
          browsing information collected automatically by our servers primarily
          to help us administer and improve the platform. We may also use
          aggregated anonymous information to provide information about the
          platform to potential business partners and other unaffiliated
          entities. This information is not personally identifiable.
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>Email Address.</strong> The email address that you supply to
          us for purposes of receiving our email communications will never be
          rented or sold to a third party.
        </Typography>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          7. PROTECTING YOUR INFORMATION
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          We work to protect the security of your information during
          transmission by using Secure Sockets Layer (SSL) software, which
          encrypts information you provide or share through the platform. If
          transactions are processed on the platform, transaction information is
          transmitted to and from the platform in encrypted form using
          industry-standard SSL connections to help protect such information
          from interception. We restrict authorized access to your personal
          information to those persons who have a legitimate need to know such
          information to provide certain functions and to those persons you have
          authorized to have access to such information. Forun Point follows
          generally accepted industry standards for data security to protect the
          personal information you provide and share through the platform, both
          during transmission and once Forun Point receives it. No method of
          transmission over the Internet, or method of electronic storage, is
          100% secure. Therefore, while Forun Point strives to use commercially
          acceptable means to protect your personal information, we cannot
          guarantee its absolute security. We will not sell, distribute or lease
          your personal information to third parties unless we have your
          permission or are required by law to do so.
        </Typography>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          8. RIGHTS
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          Users who provide information through our platform, as data subjects
          and data owners, have the right to access, rectify, download or delete
          their information, as well as to restrict and object to certain
          processing of their information. While some of these rights apply
          generally, others apply only in certain limited circumstances. We
          describe these rights below:
          <br />
          <ul>
            <li>
              <strong>Access and portability:</strong> to access and know what
              information is stored in our servers, you can send us your request
              through our contact information.
            </li>
            <li>
              <strong>Rectify, Restrict, Limit and/or Delete:</strong> You can
              also rectify, restrict, limit or delete much of your information.
            </li>
            <li>
              <strong>Right to be informed:</strong> Users of our platform will
              be informed, upon request, about what data we collect, how it is
              used, how long it is retained and whether it is shared with third
              parties.
            </li>
            <li>
              <strong>Object:</strong> When we process your information based on
              our legitimate interests as explained above, or in the public
              interest, you may object to this processing in certain
              circumstances. In such cases, we will stop processing your
              information unless we have compelling legitimate reasons to
              continue processing it or where it is necessary for legal reasons.
            </li>
            <li>
              <strong>Revoke consent:</strong> Where you have previously given
              your consent, such as to allow us to process and store your
              personal information, you have the right to revoke your consent to
              the processing and storage of your information at any time. For
              example, you may withdraw your consent by updating your settings.
              In certain cases, we may continue to process your information
              after you have withdrawn your consent if we have a legal basis for
              doing so or if your withdrawal of consent was limited to certain
              processing activities.
            </li>
            <li>
              <strong>Complaint:</strong> If you wish to file a complaint about
              our use of your information (and without prejudice to any other
              rights you may have), you have the right to do so with your local
              supervisory authority. Users can exercise all these rights by
              contacting us through the contact information or the contact page.
            </li>
            <li>
              <strong>
                Rights related to automated decision-making, including
                profiling:
              </strong>{" "}
              platform users may request that we provide a copy of the automated
              processing activities we conduct if they believe that data is
              being unlawfully processed.
            </li>
          </ul>
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          Users or owners of the personal information they provide through the
          platform may exercise these rights over their personal information at
          any time and without any limitation by sending us their request
          through our contact information.
        </Typography>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          9. CHILDREN'S ONLINE PRIVACY PROTECTION
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          We are in compliance with the requirements of the California Consumer
          Privacy Act (CCPA)and the Texas Privacy Act, regarding the protection
          of the personal data of minors. We only collect information from
          persons under the age of 18 and over the age of 13 with their
          parent&#39;s or legal guardian&#39;s permission. We do not collect any
          information from children under the age of 13. If you are aware that a
          child under the age of 13 has provided us with personal information
          without the permission of his or her parent or legal guardian, please
          contact us. If we become aware that a minor has provided us with
          personal information without the permission of a parent or legal
          guardian, we will take steps to delete that information, terminate
          that person&#39;s account, and restrict access to that person&#39;s
          account.
        </Typography>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          10. THIRD PARTIES
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          Except as otherwise expressly included in this privacy policy, this
          document addresses only the use and disclosure of information Forun
          Point collects from you. If you disclose your information to others,
          whether other Forun Point users or vendors, different rules may apply
          to their use or disclosure of the information you disclose to them.
          Forun Point does not control the privacy policies of third parties,
          and you are subject to the privacy policies of those third parties
          where applicable. Forun Point is not responsible for the privacy or
          security practices of other platforms, including those that are linked
          to from Forun Point.
        </Typography>
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
          className="global-font-family"
        >
          11. CONTACT US
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          If you have any questions or concerns about this privacy policy and
          the processing and security of your data, please contact us via our
          contact page or by using the following contact information:
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>Forun Point LLC.</strong>
        </Typography>
        <Typography
          gutterBottom
          className="global-font-family global-text about-text-set"
        >
          <strong>Email: info@forunpoint.com</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicyPage;
