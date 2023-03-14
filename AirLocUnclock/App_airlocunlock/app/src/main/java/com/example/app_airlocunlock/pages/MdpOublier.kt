package com.example.app_airlocunlock.pages

import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.navigation.NavController
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.app_airlocunlock.api.UserApi
import com.example.app_airlocunlock.ui.theme.App_airlocunlockTheme
import com.example.app_airlocunlock.ui.theme.Purple700
import retrofit2.*
import retrofit2.converter.gson.GsonConverterFactory

data class ProfileModel(
    var id: Int,
    var login: String,
    var mdp: String,
    var email: String,
    var status: String
)
@Composable
fun ForgotPassword(navController: NavController) {
    Column(
        modifier = Modifier.padding(20.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        val username = remember {
            mutableStateOf(TextFieldValue())
        }
        val password = remember {
            mutableStateOf(TextFieldValue())
        }
        val profile = remember {
            mutableStateOf(
                ProfileModel(
                    id = 0,
                    login = "",
                    mdp = "",
                    email = "",
                    status = "",
                )
            )
        }

        Spacer(modifier = Modifier.height(100.dp))

        Text(
            text = "Mot de Passe Oublié",
            style = TextStyle(fontSize = 30.sp, fontFamily = FontFamily.Serif)
        )

        Spacer(modifier = Modifier.height(15.dp))

        TextField(
            label = { Text(text = "Identifiant") },
            value = username.value,
            onValueChange = { username.value = it }
        )

        Spacer(modifier = Modifier.height(15.dp))

        TextField(
            label = { Text(text = "Nouveau Mot de Passe") },
            value = password.value,
            onValueChange = { password.value = it },
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password)
        )

        Spacer(modifier = Modifier.height(15.dp))

        TextField(
            label = { Text(text = "Retaper Votre Mot de Passe") },
            value = password.value,
            onValueChange = { password.value = it },
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password)
        )


        Spacer(modifier = Modifier.height(15.dp))

        Box(modifier = Modifier.padding(40.dp, 0.dp, 40.dp, 0.dp)) {
            Button(
                onClick = {},
                shape = RoundedCornerShape(50.dp),
                modifier = Modifier
                    .fillMaxWidth()
                    .height(50.dp)
            )

            {
                Text(text = "Connexion")
            }
        }

        Spacer(modifier = Modifier.height(15.dp))

        Box(modifier = Modifier.padding(40.dp, 0.dp, 40.dp, 0.dp)) {
            Button(
                onClick = { navController.navigate("login") },
                shape = RoundedCornerShape(50.dp),
                modifier = Modifier
                    .fillMaxWidth()
                    .height(50.dp)
            )

            {
                Text(text = "     Vous avez déjà un compte ")
            }
        }
    }
}