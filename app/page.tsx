"use client";
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Check, Menu, Star } from "lucide-react"
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
  

export default function Home() {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"premium"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
 

  return (
    <div className="page-wrapper">
      {/* Navigation */}
      <div className="navbar_component">
        <div className="navbar_container">
          <Link href="#Inicio" className="navbar_logo-link">
            <Image src="/logo.svg" alt="Logo de GFE Marketing" className="w-auto h-2.5rem" />
          </Link>
          <nav className="navbar_menu">
            <div className="navbar_menu-dropdown">
              <div className="dropdown_toggle">
                <div className="dropdown-icon">
                  <ChevronDown size={20} />
                </div>
                <div className="dropdown_text">Soluciones</div>
              </div>
              <div className="navbar_dropdown-list">
                <div className="navbar_dropdown-link-list">
                  <Link href="#" className="navbar_dropdown-link">
                    <div className="navbar_icon-wrapper">
                      <div className="icon-small">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.02"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                          <path d="M8 21.168V14l4-7 4 7v7.168" />
                          <path d="M8 14s1.127 1 2 1 2-1 2-1 1.127 1 2 1 2-1 2-1" />
                        </svg>
                      </div>
                    </div>
                    <div className="navbar_item-right">
                      <div className="margin-bottom margin-tiny">
                        <div className="text-weight-semibold">Marketing en Redes Sociales</div>
                      </div>
                      <div className="text-size-smalls">
                        Estrategias de contenido orgánico que conectan con tu audiencia y generan comunidad.
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="navbar_dropdown-link">
                    <div className="navbar_icon-wrapper">
                      <div className="icon-small">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.02"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 8v8m0-8H8m4 0h4" />
                          <path d="M2 20.4V3.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z" />
                          <path d="M1 13v-2h2v2H1zM21 13v-2h2v2h-2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="navbar_item-right">
                      <div className="margin-bottom margin-tiny">
                        <div className="text-weight-semibold">Automatización con Inteligencia Artificial</div>
                      </div>
                      <div className="text-size-smalls">
                        Implementamos flujos de venta y sistemas automatizados para escalar sin perder control.
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="#Nosotros" className="navbar_link">
              Nosotros
            </Link>
            <Link href="#Servicios" className="navbar_link">
              Servicios
            </Link>
            <Link href="#Clientes" className="navbar_link">
              Clientes
            </Link>
            <Link href="#Testimonio" className="navbar_link">
              Casos de Éxito
            </Link>
          </nav>
          <div className="navbar_button-wrapper">
            <Link href="#agendar" className="button is-outlined is-small">
              Comenzar
            </Link>
            <div className="navbar_menu-button">
              <Menu className="menu-icon2" />
            </div>
          </div>
        </div>
      </div>

      <main className="main-wrapper">
        {/* Hero Section */}
        <header className="section_header background-color-blue">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-xlarge">
                <div className="header_component">
                  <div className="header_content">
                    <div className="margin-bottom margin-small">
                      <h1>
                        Impulsa la Transformación Digital de tu Negocio
                      </h1>
                    </div>
                    <p className="text-style-subheading">
                      ¿Tienes un negocio físico y deseas dar el salto al mundo digital? ¿O buscas optimizar tu tienda online para alcanzar nuevos horizontes? Estamos aquí para ayudarte a crecer.
                    </p>
                    <div className="margin-top margin-medium">
                      <div className="header_talents-image-wrapper">
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          alt="persona 1"
                          width={60}
                          height={60}
                          className="header_talents-image"
                        />
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          alt="persona 2"
                          width={60}
                          height={60}
                          className="header_talents-image"
                        />
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          alt="persona 3"
                          width={60}
                          height={60}
                          className="header_talents-image"
                        />
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          alt="persona 4"
                          width={60}
                          height={60}
                          className="header_talents-image"
                        />
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          alt="persona 5"
                          width={60}
                          height={60}
                          className="header_talents-image hide-mobile-portrait"
                        />
                      </div>
                    </div>
                    <div className="margin-top margin-medium">
                      <div className="button-group">
                        <Link href="#agendar" className="button is-yellow">
                          Solicita tu Consultoría Gratuita
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="header_image-wrapper hide-tablet">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="diseño de sitio web"
                      width={400}
                      height={400}
                      className="header_sample-image is-first"
                    />
                    <Image
                      src="/placeholder.svg?height=320&width=320"
                      alt="diseño de marca"
                      width={320}
                      height={320}
                      className="header_sample-image is-second"
                    />
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="diseño de UI de aplicación"
                      width={400}
                      height={400}
                      className="header_sample-image is-third"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Clients Section */}
        <section id="Clientes" className="section_logo background-color-black">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-small">
                <div className="logo_component">
                  <div className="logo_content-left">
                    <h2 className="text-size-large text-weight-semibold">Empresas confiando en nosotros</h2>
                  </div>
                  <div className="logo_logo-list">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="logo_wrapper">
                        <Image
                          src="/placeholder.svg?height=60&width=144"
                          alt={`Logo cliente ${i}`}
                          width={144}
                          height={60}
                          className="logo_logo"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section - Mapped to "Para Quién es Esto" */}
        <section className="section_statistics">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-small">
                <div className="statistics_component">
                  <div className="statistics_item">
                      <h3 className="heading-style-h4">
                        Marcas eCommerce que ya venden y quieren escalar.
                      </h3>
                    <p></p>
                  </div>
                  <div className="statistics_item">
                      <h3 className="heading-style-h4">
                        Negocios físicos que quieren digitalizarse con estrategia.
                      </h3>
                    <p></p>
                  </div>
                  <div className="statistics_item">
                      <h3 className="heading-style-h4">
                        Dueños que buscan una estrategia real, no solo likes.
                      </h3>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section - Mapped to "Somos tu Socio..." and partially "Servicios" */}
        <section id="Nosotros" className="section_services">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-xlarge">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="max-width-large align-center">
                      <div className="margin-bottom margin-small">
                        <h2>Somos tu Socio en la Digitalización Empresarial</h2>
                      </div>
                      <p className="text-size-medium">
                        En nuestra agencia no somos una más del montón: diseñamos embudos de venta completos que combinan estrategia, creatividad y exclusividad. Cada paso está pensado para atraer, convertir y fidelizar, integrando anuncios en Meta y contenido orgánico de alto impacto para escalar tu eCommerce de forma inteligente y sostenible.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="services_component">
                  <Link href="#" className="services_link-block">
                    <div className="services_link-text-small">01</div>
                    <h3 className="services_link-text">Desarrollo Web y Tiendas Online</h3>
                    <div className="services_link-image-wrapper">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Desarrollo Web y Tiendas Online"
                        width={400}
                        height={300}
                        className="services_link-image"
                      />
                    </div>
                  </Link>
                  <Link href="#" className="services_link-block">
                    <div className="services_link-text-small">02</div>
                    <h3 className="services_link-text">Automatización con Inteligencia Artificial</h3>
                    <div className="services_link-image-wrapper">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Automatización con Inteligencia Artificial"
                        width={400}
                        height={300}
                        className="services_link-image"
                      />
                    </div>
                  </Link>
                  <Link href="#" className="services_link-block">
                    <div className="services_link-text-small">03</div>
                    <h3 className="services_link-text">Publicidad Digital (Paid Media)</h3>
                    <div className="services_link-image-wrapper">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Publicidad Digital (Paid Media)"
                        width={400}
                        height={300}
                        className="services_link-image"
                      />
                    </div>
                  </Link>
                  <Link href="#" className="services_link-block">
                    <div className="services_link-text-small">04</div>
                    <h3 className="services_link-text">Marketing en Redes Sociales</h3>
                    <div className="services_link-image-wrapper">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Marketing en Redes Sociales"
                        width={400}
                        height={300}
                        className="services_link-image"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <div id="Metodologia" className="how-it-works_component">
          <div className="how-it-works_heading">
            <div className="padding-global">
              <div className="container-small">
                <div className="padding-section-large">
                  <div className="text-align-center">
                    <div className="margin-bottom margin-small">
                      <h2>Nuestra Metodología en 4 pasos</h2>
                    </div>
                    <p className="text-size-medium">Te mostramos nuestra fórmula para tener más clientes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="how-it-works_timeline">
            <div className="padding-global">
              <div className="container-large">
                <div className="how-it-works_layout">
                  <div className="how-it-works_progress">
                    <div className="how-it-works_progress-bar"></div>
                    <div className="how-it-works_fade-overlay-top"></div>
                    <div className="how-it-works_fade-overlay-bottom"></div>
                  </div>
                  <div className="how-it-works_item">
                    <div className="how-it-works_left">
                      <h3 className="how-it-works_date-text">
                        <span className="text-color-blue">Primero</span> Estrategia
                      </h3>
                    </div>
                    <div className="how-it-works_centre">
                      <div className="how-it-works_circle"></div>
                    </div>
                    <div className="how-it-works_right">
                      <div className="margin-bottom margin-xlarge">
                        <p className="text-size-large text-weight-medium">
                          Analizamos tu negocio y desarrollamos una estrategia personalizada para alcanzar tus objetivos.
                        </p>
                      </div>
                      <div className="how-it-works_image-wrapper">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Estrategia"
                          width={400}
                          height={300}
                          className="steps_image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="how-it-works_item">
                    <div className="how-it-works_left">
                      <h3 className="how-it-works_date-text">
                        <span className="text-color-blue">Luego</span> Implementación
                      </h3>
                    </div>
                    <div className="how-it-works_centre">
                      <div className="how-it-works_circle"></div>
                    </div>
                    <div className="how-it-works_right">
                      <div className="margin-bottom margin-xlarge">
                        <p className="text-size-large text-weight-medium">
                          Nuestro equipo de expertos implementa la estrategia utilizando las mejores herramientas y prácticas.
                        </p>
                      </div>
                      <div className="how-it-works_image-wrapper">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Implementación"
                          width={400}
                          height={300}
                          className="steps_image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="how-it-works_item">
                    <div className="how-it-works_left">
                      <h3 className="how-it-works_date-text">
                        <span className="text-color-blue">Después</span> Análisis
                      </h3>
                    </div>
                    <div className="how-it-works_centre">
                      <div className="how-it-works_circle"></div>
                    </div>
                    <div className="how-it-works_right">
                      <div className="margin-bottom margin-xlarge">
                        <p className="text-size-large text-weight-medium">
                          Analizamos los resultados y métricas para evaluar el rendimiento de la estrategia implementada.
                        </p>
                      </div>
                      <div className="how-it-works_image-wrapper">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Análisis"
                          width={400}
                          height={300}
                          className="steps_image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="how-it-works_item">
                    <div className="how-it-works_left">
                      <h3 className="how-it-works_date-text">
                        Y <span className="text-color-blue">finalmente</span> Optimización
                      </h3>
                    </div>
                    <div className="how-it-works_centre">
                      <div className="how-it-works_circle"></div>
                    </div>
                    <div className="how-it-works_right">
                      <div className="margin-bottom margin-xlarge">
                        <p className="text-size-large text-weight-medium">
                          Optimizamos continuamente la estrategia para mejorar los resultados y maximizar el retorno de inversión.
                        </p>
                      </div>
                      <div className="how-it-works_image-wrapper">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Optimización"
                          width={400}
                          height={300}
                          className="steps_image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section - Mapped to "Servicios que Ofrecemos" intro */}
        <section id="Servicios" className="section_showcase">
          <div className="padding-global">
            <div className="container-large">
              <div className="showcase_component">
                <div className="showcase_content-left">
                  <div className="margin-bottom margin-small">
                    <h2>
                      Servicios que Ofrecemos
                    </h2>
                  </div>
                  <p className="text-size-medium">
                    Diseñamos plataformas personalizadas, modernas y optimizadas para convertir visitas en ventas.
                  </p>
                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      <Link href="#agendar" className="button is-alternate">
                        Contáctanos
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="showcase_content-right">
                  <div className="showcase_images-layout">
                    <div className="showcase_image-list-top">
                      <div className="showcase_image-list">
                        <div className="showcase_image-wrapper">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Marketing de Redes Sociales"
                            width={400}
                            height={300}
                            className="showcase_image"
                          />
                        </div>
                        <div className="showcase_image-wrapper">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Inteligencia Artificial"
                            width={400}
                            height={300}
                            className="showcase_image"
                          />
                        </div>
                        <div className="showcase_image-wrapper">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Paid Media"
                            width={400}
                            height={300}
                            className="showcase_image"
                          />
                        </div>
                      </div>
                      <div className="showcase_image-list">
                        <div className="showcase_image-wrapper">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Producción Audiovisual"
                            width={400}
                            height={300}
                            className="showcase_image"
                          />
                        </div>
                        <div className="showcase_image-wrapper">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Desarrollo Web"
                            width={400}
                            height={300}
                            className="showcase_image"
                          />
                        </div>
                        <div className="showcase_image-wrapper">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Marketing B2B"
                            width={400}
                            height={300}
                            className="showcase_image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Types Section */}
        <section className="section_pricing">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="margin-bottom margin-xxhuge">
                  <div className="text-align-center">
                    <div className="max-width-xlarge align-center">
                      <div className="margin-bottom margin-small">
                        <h2>
                          Elige tu <span className="text-color-blue">tipo de cita</span>
                        </h2>
                      </div>
                      <p className="text-size-medium">Selecciona la opción que mejor se adapte a tus necesidades.</p>
                    </div>
                  </div>
                </div>
                <div className="pricing_component">
                  <div className="pricing_plan">
                    <div className="pricing_content">
                      <div className="margin-bottom margin-tiny">
                        <div className="heading-style-h6">¿Necesitas que te guiemos?</div>
                      </div>
                      <div>Te obsequiamos 20 min. de consultoría.</div>
                      <div className="pricing_divider"></div>
                      <div className="margin-top margin-medium">
                        <Link href="#agendar" className="button max-width-full">
                          Agendar consultoría
                        </Link>
                      </div>
                      <div className="pricing_divider"></div>
                      <div className="pricing_feature-list">
                        <div className="pricing_feature">
                          <div className="pricing_icon-wrapper">
                            <Check className="icon-1x1-xsmall" />
                          </div>
                          <div>Diagnóstico inicial</div>
                        </div>
                        <div className="pricing_feature">
                          <div className="pricing_icon-wrapper">
                            <Check className="icon-1x1-xsmall" />
                          </div>
                          <div>Recomendaciones personalizadas</div>
                        </div>
                        <div className="pricing_feature">
                          <div className="pricing_icon-wrapper">
                            <Check className="icon-1x1-xsmall" />
                          </div>
                          <div>Sin compromiso</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing_plan is-most-popluar">
                    <div className="pricing_content">
                      <div className="margin-bottom margin-tiny">
                        <div className="heading-style-h4">¿Ya tienes claro lo que necesitas?</div>
                      </div>
                      <div>Reunámonos para revisar tu requerimiento.</div>
                      <div className="pricing_divider"></div>
                      <div className="margin-top margin-medium">
                        <Link href="#agendar" className="button max-width-full">
                          Agendar para cotizar
                        </Link>
                      </div>
                      <div className="pricing_divider"></div>
                      <div className="pricing_feature-list">
                        <div className="pricing_feature">
                          <div className="pricing_icon-wrapper">
                            <Check className="icon-1x1-xsmall" />
                          </div>
                          <div>Análisis de requerimientos</div>
                        </div>
                        <div className="pricing_feature">
                          <div className="pricing_icon-wrapper">
                            <Check className="icon-1x1-xsmall" />
                          </div>
                          <div>Propuesta personalizada</div>
                        </div>
                        <div className="pricing_feature">
                          <div className="pricing_icon-wrapper">
                            <Check className="icon-1x1-xsmall" />
                          </div>
                          <div>Cotización detallada</div>
                        </div>
                        <div className="pricing_feature">
                          <div className="pricing_icon-wrapper">
                            <Check className="icon-1x1-xsmall" />
                          </div>
                          <div>Plan de implementación</div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_most-popular-plan-header">
                      <div className="heading-style-h6">Más popular</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="Testimonio" className="section_testimonial">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="max-width-large align-center">
                      <div className="margin-bottom margin-small">
                        <h2>Casos de éxito</h2>
                      </div>
                      <p className="text-size-medium">
                        Hemos trabajado en más de 15 marcas en varias industrias generando grandes resultados.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial_component">
                  <div className="testimonial_content">
                    <div className="testimonial_rating-wrapper">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="testimonial_rating-icon" fill="currentColor" />
                      ))}
                    </div>
                    <div className="margin-bottom margin-small">
                      <div className="text-size-medium">
                        &ldquo;Their adept grasp of the intricacies of the regional market was laudable. It is with profound
                        gratitude that I acknowledge their invaluable contribution to our mission and unequivocally
                        endorse their exceptional service.&rdquo;
                      </div>
                    </div>
                    <div className="testimonial_client">
                      <div className="testimonial_client-image-wrapper">
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          alt="Franco Aguilar Pelizzoli"
                          width={60}
                          height={60}
                          className="testimonial_customer-image"
                        />
                      </div>
                      <div className="testimonial_client-info">
                        <p className="text-weight-semibold">Franco Aguilar Pelizzoli</p>
                        <p>Content Producer, Man City</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_content">
                    <div className="testimonial_rating-wrapper">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="testimonial_rating-icon" fill="currentColor" />
                      ))}
                    </div>
                    <div className="margin-bottom margin-small">
                      <div className="text-size-medium">
                        &ldquo;MPV Fight, escuela de artes marciales personalizadas. Se logró fidelizar a los clientes nuevos
                        logrando mantener 20 clientes frecuentes. Se implementó la optimización en anuncios
                        publicitarios creando videos/reels nuevos con tendencias.&rdquo;
                      </div>
                    </div>
                    <div className="testimonial_client">
                      <div className="testimonial_client-image-wrapper">
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          alt="Cliente MPV Fight"
                          width={60}
                          height={60}
                          className="testimonial_customer-image"
                        />
                      </div>
                      <div className="testimonial_client-info">
                        <p className="text-weight-semibold">MPV Fight</p>
                        <p>Escuela de artes marciales</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_content">
                    <div className="testimonial_rating-wrapper">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="testimonial_rating-icon" fill="currentColor" />
                      ))}
                    </div>
                    <div className="margin-bottom margin-small">
                      <div className="text-size-medium">
                        &ldquo;Sonrire Odontología estética, incrementó sus ventas con 400% de ROAS con anuncios publicitarios
                        en Meta. Se desarrolló una estrategia de performance growth captando de clientes nuevos e
                        incrementando las ventas por servicio de estética dental.&rdquo;
                      </div>
                    </div>
                    <div className="testimonial_client">
                      <div className="testimonial_client-image-wrapper">
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          alt="Cliente Sonrire"
                          width={60}
                          height={60}
                          className="testimonial_customer-image"
                        />
                      </div>
                      <div className="testimonial_client-info">
                        <p className="text-weight-semibold">Sonrire</p>
                        <p>Odontología estética</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Cal.com  */}
        <section id="agendar" className="section_cta"> 
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="text-align-center margin-bottom margin-large">
                  <h2 className="heading-style-h2">
                    Agenda una Cita con Nosotros
                  </h2>
                  <p className="text-size-medium">
                    Selecciona un horario disponible en nuestro calendario para conversar sobre tu proyecto.
                  </p>
                </div>
                 <Cal namespace="premium"
                 calLink="sebasbimbi/premium"
                 style={{width:"100%",height:"100%",overflow:"scroll"}}
                 config={{"layout":"month_view"}}
                 />;
              </div>
            </div>
          </div>
        </section>
        {/* Final CTA Section - Mapped to "Agendá tu Consultoría Gratuita" */}
        <section className="section_cta background-color-blue">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="cta_component">
                  <div className="cta_content-wrapper">
                    <div className="cta_content-left">
                      <div className="margin-bottom margin-small">
                        <h2>Agenda tu Consultoría Gratuita</h2>
                      </div>
                      <p className="text-size-medium">
                        No trabajamos con todos. Solo aceptamos proyectos donde vemos un verdadero potencial de crecimiento. Analizamos cada caso de forma personalizada y solo colaboramos con marcas que consideramos aptas para generar resultados reales. ¿Creés que tu negocio es uno de ellos?
                      </p>
                      <div className="margin-top margin-medium">
                        <Link href="#agendar" className="button is-white">
                          Agenda tu consultoría
                        </Link>
                      </div>
                    </div>
                    <div className="cta_content-right">
                      <Image
                        src="/placeholder.svg?height=400&width=300"
                        alt="Contact Illustration"
                        width={300}
                        height={400}
                        className="cta_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="footer_component">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-vertical padding-xxlarge">
              <div className="padding-bottom padding-xxlarge">
                <div className="footer_top-wrapper">
                  <div className="footer_left-wrapper">
                    <div className="margin-bottom margin-small">
                      <Link href="#" className="footer_logo-link">
                        <Image src="/logo.svg" alt="Logo de GFE Marketing" width={213} height={49} className="footer_logo" />
                      </Link>
                    </div>
                    <div className="margin-bottom margin-small">
                      <div>
                        Implementamos herramientas que automatizan tus campañas, optimizando la interacción con tus
                        clientes y mejorando los resultados en cada etapa del embudo de ventas.
                      </div>
                    </div>
                  </div>
                  <div className="footer_menu-wrapper">
                    <div className="footer_link-list">
                      <div className="margin-bottom margin-xsmall">
                        <div className="text-weight-semibold text-color-blue">Visita</div>
                      </div>
                      <Link href="#Nosotros" className="footer_link">
                        Nosotros
                      </Link>
                      <Link href="#Servicios" className="footer_link">
                        Servicios
                      </Link>
                      <Link href="#Testimonio" className="footer_link">
                        Casos de éxito
                      </Link>
                    </div>
                    <div className="footer_link-list">
                      <div className="margin-bottom margin-xsmall">
                        <div className="text-weight-semibold text-color-blue">Redes Sociales</div>
                      </div>
                      <Link
                        href="https://www.instagram.com/gfemarketing/"
                        target="_blank"
                        className="footer_social-link"
                      >
                        <div className="footer_social-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                          </svg>
                        </div>
                        <div>Instagram</div>
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@gfemarketing"
                        target="_blank"
                        className="footer_social-link"
                      >
                        <div className="footer_social-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
                          </svg>
                        </div>
                        <div>TikTok</div>
                      </Link>
                      <Link
                        href="http://www.linkedin.com/company/gfe-marketing/"
                        target="_blank"
                        className="footer_social-link"
                      >
                        <div className="footer_social-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                          </svg>
                        </div>
                        <div>LinkedIn</div>
                      </Link>
                      <Link href="https://wa.link/" target="_blank" className="footer_social-link">
                        <div className="footer_social-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                          </svg>
                        </div>
                        <div>WhatsApp</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line-divider"></div>
              <div className="padding-top padding-medium">
                <div className="footer_bottom-wrapper">
                  <div className="footer_credit-text">2025 © GFE Marketing. Todos los derechos reservados</div>
                  <div className="footer_legal-list">
                    <Link href="#" className="footer_legal-link">
                      Política de Privacidad
                    </Link>
                    <Link href="#" className="footer_legal-link">
                      Términos de Servicio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <Link href="https://wa.link/5ksthp" target="_blank" className="whatsapp-button">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
          </svg>
        </Link>
      </footer>
    </div>
  )
}