import DiningTable from "../components/DiningTable";


const PrivateDining = () => {

  const DiningTableData = [
    {
      title: "Chef's Table",
      description: "The focal point of the Kouzina is the Chef's Table. It is a beautiful 20-foot-long hand-carved wooden table that can accommodate up to 20 people. This space is ideal for celebrations, special family events, and casual business functions that do not require a completely private space.",
      imageSrc: "/images/chef-table.jpg"
    },
    {
      title: "OENOS ROOM",
      description: "Adjacent to the Kouzina is the Oenos or “wine” room.  This is one of Kokkari’s two private dining rooms.  This room features large windows that look out on to Jackson Street and a dramatic wall of wine racks that spans floor to ceiling.  The large, wood-framed, sliding glass doors that separate the Oenos Room from the main dining area allow guests to feel part of the restaurant while still being in a private space.  This room can accommodate 30 people.",
      imageSrc: "/images/Kokkari_oenos-room.jpg"
    },
    {
      title: "HANIA",
      description: "This unique private dining room is located downstairs and is completely separate from the main dining area.  The room has the feel of a wine cellar with warm wood accents and rich, tapestry carpets.  It features a rectangular polished wood table that accommodates up to 10 people comfortably.  The Hania Room is ideal for small business meetings and intimate family functions.",
      imageSrc: "/images/Kokkari_Hania-room.jpg"
    },
  ];


  return (
    <section className=" py-8 px-4 md:px-24 lg:px-48">

      <p className="text-3xl font-serif text-[#333333] uppercase mb-4">Private Dining and Special Events</p>

      {DiningTableData.map((item, index) => (
        <DiningTable
          key={index}
          title={item.title}
          description={item.description}
          imageSrc={item.imageSrc}
        />
      ))}

      <div className="container mx-auto my-8 p-4 border-l-4 border-l-[#6d4412] border-t border-r border-b border-[#000000]  pl-4 ">
        <h2 className="text-xl font-serif text-[#333333] mb-2 uppercase">Further Group Dining Information</h2>
        <p className="text-md font-serif text-[#333333] mb-2">For group dining options, room minimums and availability, please contact our Event Manager,    <a
          href="mailto:events@kokkari.com"
          className="text-[#844e02] hover:opacity-60"
        >
          Bibi Bahador
        </a>.</p>
        <div className="text-lg mb-4">
          <p className="mb-2">
            Phone:
            <a
              href="tel:+14159810983"
              className="text-[#844e02] hover:opacity-60 ml-1"
            >
              415.981.0983
            </a>
          </p>
          <p>
            Email:
            <a
              href="mailto:events@kokkari.com"
              className="text-[#844e02] hover:opacity-60 ml-1"
            >
              events@kokkari.com
            </a>
          </p>
        </div>
        <div className="mt-4 text-lg">
          <span className="mr-2">Download:</span>
          <a
            href="/pdfs/KokkariPrivateDining20180910.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#844e02] hover:opacity-60 mr-2"
          >
            Private Dining Packet
          </a>
          <span className="mx-1">or</span>
          <a
            href="/pdfs/KokkariLunchPacket20180910.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#844e02] hover:opacity-60"
          >
            Lunch Event Packet
          </a>
        </div>

      </div>
    </section>
  );
};

export default PrivateDining;
