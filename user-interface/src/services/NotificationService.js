export class NotificationService {
  #endPoint = "http://localhost:3000/notification";

  async sendMessage(createNotificationDto) {
    const { category, description } = createNotificationDto;

    if ([category, description].includes("")) {
      throw new Error("All fields are required");
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createNotificationDto),
    };

    const response = await fetch(this.#endPoint, requestOptions);
    const data = await response.json();
    return data;
  }

  async getNotifications() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(this.#endPoint, requestOptions);
    const data = await response.json();

    return data;
  }
}
