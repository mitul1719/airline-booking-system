1. We can expect more flight serches than booking
2. Ensure system reliability on bookings
3. The system will be built with the expectation of 1_00_00_0 total users
4. Expct 1_00_00_0 total bookings in a quarter
5. In one day assume 100 bookings
6. Prices should never change when the booking process is going on for a customer.
7. System should autoscale itself to atleast 3x more traffic
8. //do later after db schema

<img src="./HLD.drawio.svg" alt="hld_diagram" />

//Schema
airplanes collection
-->List of airplanes

city collection //seed
-->List of cities

airport collection //seed
-->list of airports
--> will be linked to city collection

flights collection
-->id
-->airplane_id (from airplane collection)
-->departure airport (id) - [we will get city from this id]
-->arrival airport (id) [we will get city from this id]
-->departure time
-->arrival time
-->price
-->boarding gate
-->total seats of the airplane
-->airline name
