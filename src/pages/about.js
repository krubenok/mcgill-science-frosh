import React from 'react';
import Layout from '../components/layout/Layout';

export default () => (
  <Layout>
    <section className="container mx-auto my-20 py-24 space-y-6">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">About Science Frosh</h1>
      <p className="text-m lg:text-l mt-6 font-light">
        Blah blah some comforting words about frosh. Maybe a group picture? idk online frosh is
        weird lol.
      </p>
    </section>
    <section className="container mx-auto my-20 py-24 space-y-6">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">Frequently Asked Questions</h1>
      <p className="text-m lg:text-l mt-6 font-light">Blah some questions about frosh.</p>
    </section>
    <section className="container mx-auto my-20 py-24 space-y-6">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">Land Acknewledgement</h1>
      <p className="text-m lg:text-l mt-6 font-light">
        The SUS acknowledges that McGill is on the traditional territory of the Indigenous People,
        Kanien'keha:ka (Ga-niyen-ge-haa-ga). The Kanien'keha:ka are the keepers of the Eastern Door
        of the Haudenosaunee Confederacy. This island known as Montreal is known as Tio’tia:ke
        (Gio-Jaw-Gé) in the language of the Kanien’kehá:ka, and has historically served as a meeting
        place for other Indigenous nations.
      </p>
      <p className="text-m lg:text-l mt-6 font-light">
        It is not enough to just acknowledge the keepers of this land and McGill’s status as a
        settler-colonial institution. Silence and inaction will only contribute to erasing the
        history, the culture, and the realities of Indigenous people. As such, it is important that
        individuals educate themselves on Indigenous matters and that they apply that knowledge to
        support Indigenous communities. The SUS should actively resist (neo)-colonialism in the many
        forms it takes, and in the diversity of forms that resistance can take.
      </p>
    </section>
  </Layout>
);
