import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'
import intro_style from '../css/style_introduction'

export default class Introduction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gestureName: 'none',
      page: 1,
    }
  }

  onSwipeLeft(gestureState) {
    this.setState({ myText: 'You swiped left!' })
    if (this.state.page === 3) {
      this.props.navigation.replace('Splash Screen')
    }
  }

  onSwipeRight(gestureState) {
    this.setState({ myText: 'You swiped right!' })
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections
    let page_left = this.state.page + 1
    let page_right = ''
    {
      this.state.page > 1
        ? (page_right = this.state.page - 1)
        : (page_right = this.state.page)
    }
    this.setState({ gestureName: gestureName })
    switch (gestureName) {
      case SWIPE_LEFT:
        this.setState({ page: page_left })
        break
      case SWIPE_RIGHT:
        this.setState({ page: page_right })
        break
    }
  }

  render() {
    const { page } = this.state
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    }
    return (
      <View style={intro_style.container}>
        <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state)}
          onSwipeLeft={(state) => this.onSwipeLeft(state)}
          onSwipeRight={(state) => this.onSwipeRight(state)}
          config={config}
        >
          <View style={intro_style.slide_container}>
            {page === 1 ? (
              <View style={intro_style.alignement_view}>
                <View style={intro_style.border_container}></View>
                <View style={intro_style.border_image}>
                  <Image
                    style={intro_style.image_robot}
                    source={require('../assets/images/robot.png')}
                  />
                </View>
                <View style={intro_style.border_image}>
                  <View style={intro_style.border_color_text_1}>
                    <View style={intro_style.border_container}></View>
                    <View style={intro_style.view_border_text_1}>
                      <Text> WELCOME TO HAPPY FIT.</Text>
                      <Text> I AM MUMBLE,</Text>
                      <Text> YOUR FITNESS COACH...</Text>
                    </View>
                  </View>
                </View>
                <View style={intro_style.aligment_image_global}>
                  <Image
                    style={intro_style.image}
                    source={require('../assets/images/btn-fill.png')}
                  />
                  <Image
                    style={[intro_style.image, intro_style.espacement_image]}
                    source={require('../assets/images/btn-unfulfilled.png')}
                  />
                  <Image
                    style={[intro_style.image, intro_style.espacement_image]}
                    source={require('../assets/images/btn-unfulfilled.png')}
                  />
                </View>
              </View>
            ) : (
              <View></View>
            )}
            {page === 2 ? (
              <View style={intro_style.alignement_view}>
                <View style={intro_style.border_container_other}></View>
                <View style={intro_style.border_image_2}>
                  <View style={intro_style.border_color_text_2}>
                    <Image
                      style={intro_style.image_muscle}
                      source={require('../assets/images/muscle.png')}
                    />
                  </View>
                </View>
                <View style={intro_style.border_image_2}>
                  <View style={intro_style.border_color_text_3}>
                    <View style={intro_style.espacement_text_2}></View>
                    <View style={intro_style.alignement_text_2}>
                      <Text style={intro_style.taille_text}>
                        Choose your own program, let us
                      </Text>
                      <Text style={intro_style.taille_text}>
                        know your experience.
                      </Text>
                      <Text style={intro_style.taille_text}>
                        We'll suggest you the optimal
                      </Text>
                      <Text style={intro_style.taille_text}>
                        program according to your needs...
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={intro_style.alignement_image_2}>
                  <Image
                    style={intro_style.image}
                    source={require('../assets/images/btn-fill.png')}
                  />
                  <Image
                    style={[intro_style.image, intro_style.espacement_image]}
                    source={require('../assets/images/btn-fill.png')}
                  />
                  <Image
                    style={[intro_style.image, intro_style.espacement_image]}
                    source={require('../assets/images/btn-unfulfilled.png')}
                  />
                </View>
              </View>
            ) : (
              <View></View>
            )}
            {page === 3 ? (
              <View style={intro_style.alignement_view}>
                <View style={intro_style.border_container}></View>
                <View style={intro_style.border_image}>
                  <Image
                    style={intro_style.image_healty}
                    source={require('../assets/images/healty.png')}
                  />
                </View>
                <View style={intro_style.border_container}>
                  <Text> SWIPE LEFT TO BEGIN!</Text>
                </View>
                <View style={intro_style.alignement_image_3}>
                  <Image
                    style={intro_style.image}
                    source={require('../assets/images/btn-fill.png')}
                  />
                  <Image
                    style={[intro_style.image, intro_style.espacement_image]}
                    source={require('../assets/images/btn-fill.png')}
                  />
                  <Image
                    style={[intro_style.image, intro_style.espacement_image]}
                    source={require('../assets/images/btn-fill.png')}
                  />
                </View>
              </View>
            ) : (
              <View></View>
            )}
          </View>
        </GestureRecognizer>
      </View>
    )
  }
}
