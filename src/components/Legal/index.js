import React, { Component } from 'react';

import s from './styles.css';

class Legal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'disclaimer'
    };
  }

  render() {
    const {
      tab
    } = this.state;

    const renderTabContent = () => {
      switch (tab) {
        case 'disclaimer':
          return (
            <div>
              {/* eslint-disable */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tincidunt sem, eget ornare massa. Maecenas ut condimentum quam. Etiam nec malesuada urna. Aliquam a egestas odio. Fusce vulputate a dolor at egestas. Maecenas diam ligula, tempor sed ipsum et, rutrum ultrices lacus. Nam luctus suscipit felis, et sagittis tellus aliquam non. Phasellus metus nunc, porttitor nec ante a, tristique iaculis lacus. Maecenas venenatis erat eget nibh aliquet pretium. In hac habitasse platea dictumst. Ut varius sagittis turpis sed molestie. Pellentesque consectetur justo vel euismod sodales. Ut posuere libero lobortis nisi aliquam auctor. Fusce ultrices nisl urna, eget mattis sem ullamcorper vel. Etiam quis mattis turpis, a vehicula urna.</p>
              <p>Integer efficitur nec nunc eget placerat. Mauris nec elementum purus. Quisque et risus metus. Fusce maximus hendrerit lorem sed lacinia. Suspendisse nec sem nec sapien laoreet auctor. Donec vulputate pharetra efficitur. Proin sagittis tempor ex sit amet efficitur. Sed bibendum, augue vel mollis condimentum, ipsum tellus fermentum ligula, sit amet maximus lectus dolor sed felis. Pellentesque dapibus faucibus ipsum, at suscipit nisi facilisis id.</p>
              <p>Nunc in nisl a tellus aliquam vehicula ut ac libero. Pellentesque aliquet ex quis magna consectetur cursus. Ut dolor sem, mattis eget fermentum ut, rutrum ut turpis. Aenean faucibus augue et molestie ullamcorper. Aenean faucibus laoreet augue, maximus posuere lectus commodo at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec luctus sapien nisl, sit amet gravida massa venenatis nec. Integer laoreet fermentum justo, vel convallis lorem pulvinar sed. Suspendisse potenti. Nulla facilisi. In hac habitasse platea dictumst. Etiam aliquam, massa eu lobortis cursus, massa diam lacinia augue, ut vestibulum ligula nisi sed metus. Sed at eros metus. Maecenas eget volutpat neque, non viverra quam.</p>
              <p>Nulla augue felis, rutrum et velit vulputate, sollicitudin imperdiet sem. Fusce ornare est in ligula tincidunt vulputate. Mauris erat ante, interdum at vestibulum et, luctus eget arcu. Integer lacus ipsum, iaculis eget magna eget, tincidunt volutpat velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eleifend risus sit amet dictum ullamcorper. Praesent nec venenatis nulla, sit amet cursus ante. Aliquam erat volutpat. Maecenas id sapien non nibh pretium fringilla consectetur in ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
              <p>Phasellus finibus diam a blandit finibus. Integer vehicula nibh ac augue efficitur, eget volutpat ante sodales. Nullam vehicula mauris ultrices sapien cursus, at posuere urna laoreet. Cras cursus massa turpis, ut molestie dolor rhoncus id. Nulla feugiat purus eu sem elementum feugiat. Suspendisse potenti. Donec scelerisque eu orci eget aliquet. Morbi mattis ligula id venenatis congue. Aenean pharetra turpis sed ante lacinia, ut interdum est commodo. Ut tincidunt lacus sit amet magna cursus tempor.</p>
              {/* eslint-enable */}
            </div>
          );
        case 'termsOfUse':
          return (
            <div>
              {/* eslint-disable */}
              <p>Donec ut massa quis dui lobortis tempor. Donec metus urna, dictum in tincidunt vel, lacinia id sapien. Pellentesque congue turpis lacus. Fusce mattis efficitur bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce eu tortor quis sem placerat ullamcorper. Pellentesque dapibus elit a tortor gravida, eu porttitor metus egestas. In ac porttitor odio, at pretium tortor. Vestibulum eget arcu id orci ullamcorper varius. Morbi ac orci ligula. Praesent convallis venenatis ex id tristique.</p>
              <p>Praesent scelerisque risus et sem porttitor commodo. Quisque at interdum odio, sit amet aliquam ante. In iaculis volutpat massa vel condimentum. Donec pretium id odio vel laoreet. Vivamus fermentum malesuada lectus nec commodo. Donec ut tincidunt nibh, non molestie erat. Vestibulum nunc arcu, accumsan et efficitur quis, fringilla nec metus. Quisque efficitur mauris magna, malesuada blandit mi rhoncus posuere. Nam placerat mi nec nisl suscipit sagittis. Integer pulvinar euismod felis id luctus. Fusce pretium velit eget quam eleifend pulvinar. Etiam ultrices blandit nisl pharetra placerat.</p>
              <p>Aliquam sed odio id tortor feugiat iaculis in sed ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in sem sit amet sapien dignissim maximus. Sed sit amet libero sed turpis euismod venenatis tincidunt ac ipsum. Mauris placerat bibendum vulputate. Ut quis eros neque. Donec ante mauris, feugiat at ligula non, vehicula rutrum massa. Suspendisse potenti. Mauris blandit consequat accumsan. Etiam rhoncus, tortor et varius laoreet, lectus libero imperdiet tortor, non tempus diam ante ac ex. Phasellus sodales, lorem at convallis fermentum, turpis nulla fringilla leo, vel rutrum quam mauris vitae ipsum.</p>
              <p>Integer ipsum urna, vehicula pellentesque viverra nec, aliquam sit amet quam. Etiam suscipit rutrum arcu, quis aliquam tortor fermentum sit amet. Mauris id vestibulum mauris. Nulla eget faucibus diam. Quisque neque dolor, placerat nec rutrum at, venenatis ut mi. Mauris egestas dui et ex elementum, dictum porttitor urna lacinia. Vestibulum ac mi pellentesque, auctor metus sit amet, dictum felis. Sed ullamcorper vestibulum elit ac dictum. Curabitur semper, ex id semper aliquet, urna mauris fermentum dolor, quis accumsan diam mauris vel leo. Donec efficitur magna eu ante porttitor, et suscipit lectus feugiat. In ut risus eleifend, facilisis erat sed, porttitor turpis. Suspendisse turpis ex, luctus in dignissim at, posuere et mauris. Vivamus accumsan malesuada magna at laoreet.</p>
              <p>Curabitur porttitor, massa in lobortis dignissim, velit orci luctus nunc, vel ornare felis nisi eget urna. Aliquam accumsan congue nisl vitae venenatis. Suspendisse pellentesque, ipsum at sollicitudin porttitor, dolor dolor eleifend nulla, vehicula fermentum est neque condimentum nisi. Aliquam malesuada odio eget dignissim interdum. Quisque luctus fringilla sem, vitae congue sem tincidunt sed. Curabitur rhoncus commodo nunc eu posuere. Etiam in nulla et mauris fermentum ultrices eget in quam. Vestibulum posuere posuere consectetur. Nam lectus elit, blandit ut mauris eu, tincidunt ullamcorper ipsum. Nam vitae lorem eget tortor volutpat mattis. Mauris fermentum auctor arcu, a porttitor nulla accumsan in. Donec nec urna ut est faucibus blandit. Vivamus feugiat vulputate velit nec eleifend. Quisque consectetur felis metus, et mattis leo posuere sed. Nulla tincidunt viverra leo, nec luctus sapien commodo nec. Sed egestas nunc ullamcorper posuere faucibus.</p>
              {/* eslint-enable */}
            </div>
          );
        case 'privacyPolicy':
          return (
            <div>
              {/* eslint-disable */}
              <p>Donec ut mi eu eros pellentesque faucibus et in arcu. Aenean sed elit massa. Cras et mi aliquam, rhoncus arcu vitae, malesuada diam. Praesent pulvinar, dolor a efficitur pellentesque, ligula elit laoreet erat, ut vestibulum sapien tellus sit amet metus. Nunc vitae diam et velit ullamcorper consectetur ac non felis. Nulla dignissim felis sed placerat mollis. Quisque non lacus enim.</p>
              <p>Vestibulum pulvinar arcu non ex malesuada, ac ultrices nisl gravida. Duis et augue porttitor, porta quam et, venenatis ante. Vivamus ut mattis felis. Nulla at aliquam ipsum. Etiam cursus hendrerit ultrices. Maecenas nec odio volutpat tortor accumsan mattis. Quisque cursus maximus ornare. Ut rutrum dui in vehicula lacinia. Curabitur vitae ipsum in dolor euismod sodales. Vivamus ac eros ut erat elementum tristique. Proin leo ipsum, sodales sit amet tortor malesuada, facilisis dapibus quam. Sed dapibus, nisl sit amet ultrices malesuada, purus leo tempus nisi, id aliquet ante dolor sit amet massa. Aliquam maximus, sapien id consectetur viverra, ipsum dui facilisis erat, in suscipit turpis est ut nisl. Donec non pharetra massa. Phasellus pellentesque erat ac arcu bibendum, sit amet fringilla velit feugiat. Aenean ac libero et diam feugiat rhoncus.</p>
              <p>Vestibulum nisi nunc, lobortis eu dolor sed, sagittis pretium enim. Nam maximus eleifend sem, eu aliquet nibh maximus eu. Maecenas vitae urna ultricies, gravida sem a, elementum turpis. Pellentesque laoreet vitae velit sit amet vulputate. Maecenas velit ligula, volutpat nec eros porta, rhoncus luctus tellus. Vivamus pellentesque tellus et dolor pretium eleifend a ultricies nisi. Mauris sapien nisi, iaculis at interdum quis, mollis id elit. Mauris quis consequat odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sit amet bibendum dolor, a dictum orci. Morbi bibendum ultricies augue, vel luctus augue. Pellentesque neque est, ultrices nec elementum at, tristique molestie sapien. Integer consequat dignissim maximus. Maecenas bibendum et velit et rhoncus. Ut a iaculis lacus. Nam dapibus condimentum elementum.</p>
              <p>Vestibulum ultricies eros non lorem fermentum, ut dictum lorem tempor. Vivamus eget pretium nibh, sit amet accumsan nunc. Nullam bibendum at odio quis vestibulum. Curabitur mattis lorem ut libero varius, ac vehicula diam tincidunt. Nulla tempus ipsum ac eros tristique aliquam. Sed rutrum nisi non ex auctor blandit. Quisque porttitor dolor diam, nec hendrerit eros aliquam nec. Vestibulum ut molestie urna. Ut luctus ipsum at urna placerat tristique. Sed blandit neque odio, quis malesuada justo tincidunt quis.</p>
              <p>Nunc risus nulla, fermentum quis lorem id, euismod venenatis arcu. Maecenas convallis enim a risus aliquet lobortis. Morbi cursus scelerisque lorem, at pellentesque enim vehicula at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus posuere dapibus metus, id ullamcorper nibh aliquam sit amet. Fusce sed nisl lorem. Vestibulum mauris urna, hendrerit eget gravida at, mattis eget enim. Duis molestie pulvinar nulla id mollis.</p>
              {/* eslint-enable */}
            </div>
          );
        default:
          return (
            <div>something went wrong</div>
          );
      }
    };

    return (
      <div className={s.container}>
        <div className={s.title}>
          <h2>Legal</h2>

          <div className={s.tabButtons}>
            <button
              onClick={() => this.setState({ tab: 'disclaimer' })}
              className={tab === 'disclaimer' ? s.active : null}
              type="button">
              Disclaimer
            </button>

            <button
              onClick={() => this.setState({ tab: 'termsOfUse' })}
              className={tab === 'termsOfUse' ? s.active : null}
              type="button">
              Terms of Use
            </button>

            <button
              onClick={() => this.setState({ tab: 'privacyPolicy' })}
              className={tab === 'privacyPolicy' ? s.active : null}
              type="button">
              Privacy Policy
            </button>
          </div>
        </div>

        <div className={s.text}>
          {renderTabContent()}
        </div>
      </div>
    );
  }
}

export default Legal;
