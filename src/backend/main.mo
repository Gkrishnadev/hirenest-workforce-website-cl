import List "mo:core/List";
import Time "mo:core/Time";

actor {
  type ContactForm = {
    name : Text;
    email : Text;
    company : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type PartnerApplication = {
    name : Text;
    email : Text;
    company : Text;
    role : Text;
    partnerType : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contactForms = List.empty<ContactForm>();
  let partnerApplications = List.empty<PartnerApplication>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, company : Text, message : Text) : async () {
    let form : ContactForm = {
      name;
      email;
      company;
      message;
      timestamp = Time.now();
    };
    contactForms.add(form);
  };

  public shared ({ caller }) func submitPartnerApplication(name : Text, email : Text, company : Text, role : Text, partnerType : Text, message : Text) : async () {
    let application : PartnerApplication = {
      name;
      email;
      company;
      role;
      partnerType;
      message;
      timestamp = Time.now();
    };
    partnerApplications.add(application);
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.toArray();
  };

  public query ({ caller }) func getAllPartnerApplications() : async [PartnerApplication] {
    partnerApplications.toArray();
  };
};
