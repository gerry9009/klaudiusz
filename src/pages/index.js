import * as React from "react";
import Layout from "../components/Layout";

import {
  index,
  index_background,
  index_headline,
  index_subtitle,
  index_content,
} from "../styles/index.module.css";

export default function Home({ location }) {
  return (
    <>
      <div className={index_background}></div>
      <Layout location={location}>
        <div className={index}>
          <div className={index_headline}>
            <h1>A jó dolgok kézzel készülnek</h1>
            <div>
              <a>Kapcsolat</a>
              <a>Referencia</a>
            </div>
          </div>

          <div className={index_subtitle}>
            <h2>Bútorasztalos munkák</h2>
          </div>
          <div className={index_content}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae nobis autem illo ipsa, doloribus cum dolorem error
              possimus voluptate earum obcaecati necessitatibus labore, ratione
              officiis. Sint, et. Provident delectus ea at eveniet molestiae
              officia dolores dolorem atque nesciunt quas quo esse iure ab
              debitis aliquid, tempora vel laudantium repellat fugit ducimus
              accusantium deleniti? Dignissimos, veniam. Impedit aliquam
              provident reiciendis, officiis doloribus consequuntur sapiente
              numquam quas nemo inventore porro distinctio quis aut est?
              Accusantium error expedita enim at earum facere labore magnam illo
              velit nesciunt, accusamus iure culpa incidunt recusandae facilis
              aliquid assumenda ducimus id. Magni cumque eum error unde, qui,
              explicabo blanditiis minima natus fugiat sit aut, culpa ipsum
              ducimus? Laborum minus mollitia obcaecati laudantium recusandae
              ratione sit quod incidunt, accusamus aspernatur, nam aliquid
              fugiat soluta. Quos quibusdam nesciunt veritatis praesentium?
              Cupiditate perspiciatis nihil esse, porro dolorum debitis
              asperiores totam quos ipsum est, numquam possimus ut distinctio
              consequuntur? Facere architecto aut voluptas commodi. Odit aperiam
              asperiores cupiditate fugiat velit, quo rerum vero distinctio
              voluptates doloribus non ratione officia omnis pariatur? Aperiam,
              eligendi. Repellendus deserunt facere cum. Ad tempora est itaque
              cupiditate. Nesciunt voluptatibus nostrum fugiat eveniet odit,
              fugit officia quae voluptatem repudiandae dolores omnis ullam qui?
              Vel quos asperiores, eos similique eveniet ullam repellendus odio
              corrupti error ab non odit ipsum perspiciatis quo vitae animi
              magnam provident aliquid cumque voluptatem. Dignissimos
              temporibus, laborum exercitationem repudiandae laudantium nihil
              optio ullam hic ea asperiores itaque sed distinctio voluptate
              ipsum facere quasi, consequuntur rem necessitatibus libero
              reprehenderit voluptates! Sunt facilis quasi laboriosam nulla
              ducimus ea repudiandae ipsam quam vitae corrupti consequatur
              quibusdam expedita sed animi numquam sit laudantium voluptatum
              amet neque earum, quis explicabo adipisci alias! Perspiciatis
              dolorem eaque expedita tempore deserunt, dolores ullam, modi
              facere explicabo quisquam odit deleniti, dolor nobis? Provident
              ullam dolor mollitia quae ipsum nostrum eum ducimus voluptatem,
              suscipit pariatur officia iste autem quibusdam, similique optio
              debitis animi quia hic numquam eligendi totam exercitationem
              dolores earum! Culpa incidunt velit architecto fugiat maiores nam
              placeat aliquam eum facere provident. Ex nulla sit illum! Soluta,
              aspernatur modi. Totam, eum! Voluptate quasi ad dolores neque.
              Amet autem qui sunt iusto recusandae esse, quos pariatur laborum
              vero sit eos, aliquid delectus itaque quibusdam architecto! Modi
              iste, odit dolorem repellendus nulla officiis maiores accusantium
              voluptatem non illo repellat ipsum, labore optio? Impedit
              exercitationem atque, neque nihil cum ipsum corrupti alias quod
              eum non, tempore vel. Sequi laboriosam earum pariatur quos
              architecto cum iusto itaque officiis esse et animi suscipit nam
              rem omnis fugiat, accusamus, explicabo debitis in? Expedita
              exercitationem magnam architecto fugit nemo autem quae atque,
              pariatur in cumque vitae, animi id perspiciatis dicta dolore
              ratione recusandae eum ipsum a iste eius? Temporibus pariatur
              fugit exercitationem! Reiciendis repudiandae alias ratione veniam
              eius, soluta nisi, odit qui fuga id modi placeat, eveniet nam.
              Quam nulla repudiandae facilis autem, magnam molestiae a
              molestias, voluptatum libero nihil odit explicabo corporis,
              exercitationem aliquid voluptas. Minus maxime illum eveniet
              maiores quas, eum eius alias explicabo repellat exercitationem
              quibusdam, ipsum suscipit iste dolorem earum natus quasi,
              veritatis sapiente repudiandae molestias.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
