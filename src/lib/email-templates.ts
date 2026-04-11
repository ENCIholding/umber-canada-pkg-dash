export function getEmailTemplate(context: string) {
  switch (context) {
    case "stakeholders":
      return { subject: "Stakeholder Update", message: "Hello Stakeholder," };
    case "vendors":
      return { subject: "Vendor Notice", message: "Hello Vendor," };
    case "careers":
      return { subject: "Career Application", message: "Thank you for applying," };
    default:
      return { subject: "Message from Dashboard", message: "Hello," };
  }
}
