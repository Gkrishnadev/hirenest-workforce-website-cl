import List "mo:core/List";
import Time "mo:core/Time";
import AccessControl "authorization/access-control";
import Principal "mo:core/Principal";
import Map "mo:core/Map";
import MixinAuthorization "authorization/MixinAuthorization";
import Runtime "mo:core/Runtime";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
    email : Text;
    company : Text;
  };

  type VendorApplication = {
    companyName : Text;
    contactPerson : Text;
    email : Text;
    phone : Text;
    technologies : Text;
    benchSize : Nat;
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

  type RequirementSubmission = {
    company : Text;
    role : Text;
    skills : Text;
    location : Text;
    engagementType : Text;
    startDate : Text;
    timestamp : Time.Time;
  };

  type ContactForm = {
    name : Text;
    email : Text;
    company : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let vendorApplications = List.empty<VendorApplication>();
  let partnerApplications = List.empty<PartnerApplication>();
  let requirementSubmissions = List.empty<RequirementSubmission>();
  let contactForms = List.empty<ContactForm>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Management Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Public Form Submission Functions (accessible to all users including guests)
  public shared ({ caller }) func submitVendorApplication(
    companyName : Text,
    contactPerson : Text,
    email : Text,
    phone : Text,
    technologies : Text,
    benchSize : Nat,
  ) : async () {
    let application : VendorApplication = {
      companyName;
      contactPerson;
      email;
      phone;
      technologies;
      benchSize;
      timestamp = Time.now();
    };
    vendorApplications.add(application);
  };

  public shared ({ caller }) func submitPartnerApplication(
    name : Text,
    email : Text,
    company : Text,
    role : Text,
    partnerType : Text,
    message : Text,
  ) : async () {
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

  public shared ({ caller }) func submitRequirementSubmission(
    company : Text,
    role : Text,
    skills : Text,
    location : Text,
    engagementType : Text,
    startDate : Text,
  ) : async () {
    let submission : RequirementSubmission = {
      company;
      role;
      skills;
      location;
      engagementType;
      startDate;
      timestamp = Time.now();
    };
    requirementSubmissions.add(submission);
  };

  public shared ({ caller }) func submitContactForm(
    name : Text,
    email : Text,
    company : Text,
    message : Text,
  ) : async () {
    let form : ContactForm = {
      name;
      email;
      company;
      message;
      timestamp = Time.now();
    };
    contactForms.add(form);
  };

  // Admin-only Retrieval Functions
  public query ({ caller }) func getAllVendorApplications() : async [VendorApplication] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can retrieve vendor applications");
    };
    vendorApplications.toArray();
  };

  public query ({ caller }) func getAllPartnerApplications() : async [PartnerApplication] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can retrieve partner applications");
    };
    partnerApplications.toArray();
  };

  public query ({ caller }) func getAllRequirementSubmissions() : async [RequirementSubmission] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can retrieve requirement submissions");
    };
    requirementSubmissions.toArray();
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can retrieve contact forms");
    };
    contactForms.toArray();
  };

  // Admin-only Delete Functions
  public shared ({ caller }) func deleteVendorApplication() : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete vendor applications");
    };
    let _ = vendorApplications.removeLast();
  };

  public shared ({ caller }) func deletePartnerApplication() : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete partner applications");
    };
    let _ = partnerApplications.removeLast();
  };

  public shared ({ caller }) func deleteRequirementSubmission() : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete requirement submissions");
    };
    let _ = requirementSubmissions.removeLast();
  };

  public shared ({ caller }) func deleteContactForm() : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete contact forms");
    };
    let _ = contactForms.removeLast();
  };
};
