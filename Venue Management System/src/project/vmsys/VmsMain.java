package project.vmsys;

import java.util.Scanner;
import java.util.Arrays;

//import kharghar.linkedlist.Node;
interface AbstractFunctions {

	void addVenue(String book);

	void checkAvailability(String book);

	void display();
}

class Functionality implements AbstractFunctions {
	static class Node {
		private Node next;
		private String data;

		public Node(String book) {
			this.data = book;
			next = null;
		}
	}

	private Node head;

	public Functionality() {
		head = null;
	}

	@Override
	public void addVenue(String book) {
		Node newNode = new Node(book);
		// Node newNode = new Node(book);
		// if (head == null) {
		// head = newNode;
		// } else {
		head = newNode;
		newNode.next = head;
		// head = newNode;
		System.out.println("Successfull" + "y Booked" + " " + newNode.data);
	}

	@Override
	public void checkAvailability(String book) {
		// Node trav = head;
		/*
		 * else { while (trav.next != null) { trav.next = trav; if
		 * (trav.next.equals(book)) { System.out.println("Already Booked"); } }
		 * }
		 */
		Node ptr1 = null, ptr2 = null;
		ptr1 = head;
		while (ptr1 != null && ptr1.next != null) {
			ptr2 = ptr1;
			do {
				if (ptr1.data == ptr2.data)
					System.out.println("Already Booked");
				else
					System.out.println("Available");
			} while (ptr2.next != null);
		}
	}

	public void display() {
		if (head == null)
			System.out.print("No Venue is Booked please try again!!");
		Node trav = head;
		while (trav != null) {
			System.out.print("Booked : " + trav.data + " ");
			trav = trav.next;
		}
		System.out.println();
	}

	// Selection Sort Time Complexity O(n2)
	public void sortVenues(String[] arr) {
		for (int i = 0; i < arr.length; i++) {
			for (int j = i + 1; j < arr.length; j++) {
				if (arr[i].compareTo(arr[j]) > 0) {
					String temp = arr[j];
					arr[j] = arr[i];
					arr[i] = temp;
				}
			}
		}
		System.out.println(Arrays.toString(arr) + " ");
	}

}

public class VmsMain {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		Functionality fun = new Functionality();

		int choice;
		String book = null;
		do {
			System.out.println("0. Exit");
			System.out.println("1. To book venue for Birthday Celebration ");
			System.out.println("2. To book venue for Wedding Reception ");
			System.out.println("3. To book venue for Office Conference ");
			System.out.println("4. To book venue for Seminar Auditorium ");
			System.out.println("5. To book venue for Kitty parties/Family Gathering");
			choice = sc.nextInt();
			switch (choice) {
			case 1:
				int ch;
				System.out.println("All available locations for Birthday Celebration");
				String arr[] = { "Radhika Party Hall", "Events", "Celebrations", "Festivals hall" };
				fun.sortVenues(arr);
				/*
				 * for (String str : arr) { System.out.println(str); }
				 */

				do {
					System.out.println("0. Exit ");
					System.out.println("1. Enter ");
					System.out.println("2. Display Booked ");
					System.out.println("3. Check Availabilty ");
					ch = sc.nextInt();
					switch (ch) {

					case 0:
						break;
					case 1:
						System.out.println("Enter your Venue :");
						book = sc.nextLine();
						// System.out.println(book);
						// if (book != "0")
						fun.addVenue(book);
						break;

					case 2:
						// System.out.println("Display Booked");
						fun.display();
						break;

					case 3:
						System.out.println("Enter Venue name to check availabilty");
						String checkString = sc.next();
						fun.checkAvailability(checkString);
						break;
					}
				} while (ch != 0);

				break;

			case 2:
				int ch1;
				System.out.println("All available locations for  Wedding Reception");
				String arr1[] = { "Sun and Sand", "Vrindavan Lawn", "Tuli International", "Radison Blue" };
				/*
				 * for (String str : arr1) { System.out.println(str); }
				 */
				fun.sortVenues(arr1);

				do {
					System.out.println("0. Exit ");
					System.out.println("1. Enter ");
					System.out.println("2. Display Booked ");
					System.out.println("3. Check Availabilty ");
					ch1 = sc.nextInt();
					switch (ch1) {

					case 0:
						break;
					case 1:
						System.out.println("Enter your Venue :");
						String book1 = sc.nextLine();
						if (book1 != "0") // && book == arr1[j]
							fun.addVenue(book1);

						break;

					case 2:
						// System.out.println("Display Booked");
						fun.display();
						break;

					case 3:
						System.out.println("Enter Venue name to check availabilty");
						String checkString = sc.nextLine();
						fun.checkAvailability(checkString);
						break;
					}
				} while (ch1 != 0);

				break;

			case 3:
				break;

			}

		} while (choice != 0);
	}
}
